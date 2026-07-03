import glob from "fast-glob";
import fs from "fs-extra";
import path from "path";
import { compRoot, distPkgRoot } from "../paths";
import * as esbuild from "esbuild";
import { parse, compileScript, compileTemplate } from "@vue/compiler-sfc";

/**
 * Vue SFC → JS 模块的 esbuild 插件
 * 使用 @vue/compiler-sfc 正确处理 defineProps/defineEmits/defineOptions 等编译宏
 */
const vuePlugin: esbuild.Plugin = {
  name: "vue-sfc",
  setup(build) {
    build.onLoad({ filter: /\.vue$/ }, async (args) => {
      const source = await fs.readFile(args.path, "utf8");
      const contents = transformVueSfc(args.path, source);
      return { contents, loader: "ts" };
    });
  },
};

function transformVueSfc(filename: string, source: string): string {
  const { descriptor } = parse(source, { filename });

  // compileScript 生成完整的组件模块代码（含 import + defineComponent + setup + render）
  if (descriptor.scriptSetup) {
    return compileScript(descriptor, { id: filename, filename }).content;
  }

  // 纯 template 的 SFC（无 script 块）
  if (descriptor.template) {
    const tpl = compileTemplate({
      source: descriptor.template.content.trim(),
      filename,
      id: filename,
      compilerOptions: { mode: "function" },
    });
    return `import { defineComponent } from "vue";\n${tpl.code}\nexport default defineComponent({ render });`;
  }

  return "";
}

export async function buildModules() {
  // 3229 个图标组件在 packages/components/src/ 下
  const compSrc = path.join(compRoot, "src");
  const files = await glob("**/*.vue", {
    cwd: compSrc,
    absolute: true,
    onlyFiles: true,
  });

  const esOut = path.join(distPkgRoot, "es");
  const cjsOut = path.join(distPkgRoot, "lib");
  await fs.emptyDir(esOut);
  await fs.emptyDir(cjsOut);

  console.log(`[buildModules] Building ${files.length} files with esbuild + vue compiler (no Rollup)...`);

  // 公共 esbuild 配置
  const commonOpts: esbuild.BuildOptions = {
    entryPoints: files,
    outbase: compSrc,
    bundle: true,
    external: ["vue"],
    minify: true,
    target: "es2018",
    plugins: [vuePlugin],
    logLevel: "warning",
  };

  // ES 格式
  await esbuild.build({
    ...commonOpts,
    outdir: esOut,
    outExtension: { ".js": ".mjs" },
    format: "esm",
  });

  // CJS 格式
  await esbuild.build({
    ...commonOpts,
    outdir: cjsOut,
    outExtension: { ".js": ".cjs" },
    format: "cjs",
  });

  // 生成 index 入口文件（re-export 所有组件）
  const toPascal = (s: string) =>
    s
      .split("-")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");

  const vueFiles = files.filter((f) => f.endsWith(".vue"));
  const esIndex = vueFiles
    .map((f) => {
      const name = toPascal(path.basename(f, ".vue"));
      const rel = path.relative(compSrc, f).replace(/\.vue$/, "");
      return `export { default as ${name} } from './${rel}.mjs';`;
    })
    .join("\n");

  await fs.writeFile(path.join(esOut, "index.mjs"), esIndex);

  const cjsIndex = vueFiles
    .map((f) => {
      const name = toPascal(path.basename(f, ".vue"));
      const rel = path.relative(compSrc, f).replace(/\.vue$/, "");
      return `exports.${name} = require('./${rel}.cjs').default;`;
    })
    .join("\n");
  await fs.writeFile(path.join(cjsOut, "index.cjs"), cjsIndex);

  // 手动生成 .d.ts 类型声明
  await generateTypes(files, compSrc);

  console.log(`[buildModules] Built ${files.length} files successfully.`);
}

/**
 * 手动生成 .d.ts 声明文件（替代 vite-plugin-dts，避免 TS 编译器内存开销）
 */
async function generateTypes(files: string[], compSrc: string) {
  const typesOut = path.join(distPkgRoot, "types");
  await fs.emptyDir(typesOut);

  const toPascal = (s: string) =>
    s
      .split("-")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");

  for (const filePath of files) {
    const rel = path.relative(compSrc, filePath);
    const dtsPath = rel.replace(/\.vue$/, ".d.ts").replace(/\.ts$/, ".d.ts");
    const baseName = path.basename(filePath, path.extname(filePath));
    const compName = toPascal(baseName);

    const isVue = filePath.endsWith(".vue");
    const content = isVue
      ? `import type { DefineComponent } from "vue";\ndeclare const _default: DefineComponent<{}, {}, any>;\nexport default _default;\nexport type ${compName}Instance = InstanceType<typeof _default>;\n`
      : `export * from '../es/${rel.replace(/\.ts$/, "")}';\n`;

    await fs.outputFile(path.join(typesOut, dtsPath), content);
  }

  // 生成 types/index.d.ts
  const exports = files
    .filter((f) => f.endsWith(".vue"))
    .map((f) => {
      const name = toPascal(path.basename(f, ".vue"));
      const rel = path.relative(compSrc, f).replace(/\.vue$/, "");
      return `export { default as ${name} } from './${rel}';\nexport type { ${name}Instance } from './${rel}';`;
    })
    .join("\n");

  await fs.outputFile(path.join(typesOut, "index.d.ts"), exports + "\n");
  console.log(`[buildModules] Generated ${files.length} type declarations.`);
}
