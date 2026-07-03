import path from "path";
import glob from "glob";
import { promisify } from "util";
import fs from "fs-extra";
import { optimize } from "svgo";
import svgoConfig from "./svgo.config";
import { getVue3Component, getType, getComponentIndex } from "./vue-template";
import { resolvePath, toPascalCase } from "./helper";

const globAsync = promisify(glob);

const root = process.cwd();
const svgIconCwd = resolvePath(root, "../svg");
const paths = {
  root: resolvePath("../birdpaper-icon"),
  icon: resolvePath("../components/src"),
};

/** 并发控制上限，避免 EMFILE */
const CONCURRENCY = 64;

interface IconData {
  name: string;
  path: string;
  componentName: string;
}

/**
 * @description 并发受限地执行异步任务
 */
async function runWithConcurrency<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {
  const results: T[] = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const i = index++;
      results[i] = await tasks[i]();
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, () => worker()));
  return results;
}

/**
 * @description 获取所有的 Icon 信息
 * @returns IconData[]
 */
export async function getIcons(): Promise<{
  iconList: IconData[];
  iconType: string[];
  iconInfo: { name: string; list: string[] }[];
}> {
  try {
    const iconList: IconData[] = [];

    // 获取所有分类目录（只匹配直接子目录）
    let iconType = await globAsync(`${svgIconCwd}/*/`, { absolute: true });

    iconType = iconType.map((item: string) => path.basename(item.replace(/\/$/, "")));

    const iconInfo = iconType.map((type) => ({
      name: type,
      list: getSvgByDir(path.join(svgIconCwd, type)),
    }));

    const files = await globAsync(`${svgIconCwd}/**/*.svg`, { absolute: true });

    // 检测命名冲突
    const nameSet = new Set<string>();
    for (const filePath of files) {
      const name = `icon-${path.basename(filePath, ".svg")}`;
      if (nameSet.has(name)) {
        console.warn(`[warn] Duplicate icon name: "${name}" from ${filePath}`);
        continue;
      }
      nameSet.add(name);
      iconList.push({
        name,
        path: filePath,
        componentName: toPascalCase(name),
      });
    }

    return { iconList, iconType, iconInfo };
  } catch (error) {
    console.error("[error] getIcons:", error);
    return { iconList: [], iconType: [], iconInfo: [] };
  }
}

/**
 * @description 获取指定目录下的所有 svg 图标
 * @param dir
 * @returns
 */
function getSvgByDir(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((item) => item.endsWith(".svg"))
    .map((item) => item.replace(".svg", ""));
}

/**
 * @description 使用轻量正则提取 SVG 根元素内容，替代 JSDOM
 */
function extractSvgHtml(svgData: string): string | null {
  const match = svgData.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!match) return null;

  const innerContent = match[1].trim();
  const openTagMatch = svgData.match(/<svg[^>]*>/i);
  if (!openTagMatch) return null;

  return `${openTagMatch[0]}${innerContent}</svg>`;
}

/**
 * @description 处理 SVG 内部的 fill="currentColor"
 * - 带有 fill="currentColor" 的元素：转为 :fill="fill" 动态绑定（跟随组件 prop）
 * - 其他 fill 值（如 fill="#231F20"）：保留原样（设计色，不受 prop 控制）
 */
function processSvgFills(svgHtml: string): string {
  return svgHtml.replace(/fill="currentColor"/g, ':fill="fill"');
}

/**
 * @description 生成 Icon 组件
 * @param iconList
 */
export async function generateIconComponent(iconList: IconData[]) {
  await fs.emptyDir(paths.icon);

  const tasks = iconList.map((item) => async () => {
    const svgFile = await fs.readFile(item.path, "utf8");
    const optimizedSvg = optimize(svgFile, { path: item.path, ...svgoConfig });

    let vueGenerated = false;

    if ("data" in optimizedSvg) {
      const { data } = optimizedSvg;
      const rawSvg = extractSvgHtml(data);
      const str = rawSvg ? processSvgFills(rawSvg) : null;

      if (str) {
        await fs.outputFile(
          path.resolve(paths.icon, `${item.name}/${item.name}.vue`),
          getVue3Component({
            name: item.name,
            componentName: item.componentName,
            svgHtml: str,
          })
        );
        vueGenerated = true;
      }
    }

    // 只有 .vue 成功生成时才写 index.ts，避免引用不存在的文件
    if (vueGenerated) {
      await fs.outputFile(path.resolve(paths.icon, `${item.name}/index.ts`), getComponentIndex(item));
    }
  });

  await runWithConcurrency(tasks, CONCURRENCY);

  const fileCount = (await fs.readdir(paths.icon)).length;
  console.log(`Built Successfully: ${fileCount} files generated.`);
}

/**
 * @description 构建 index.ts
 * @param data
 * @param iconType
 * @param iconInfo
 */
export async function buildIndex(data: IconData[], iconType: string[], iconInfo: { name: string; list: string[] }[]) {
  const exports: string[] = [];

  for (const item of data) {
    exports.push(`export * from './src/${item.name}';`);
  }

  const fileCount = (await fs.readdir(paths.icon)).length;
  const infoContent = `\n\nexport const iconType = [${iconType.map((item) => `"${item}"`)}];
export const iconInfo = ${JSON.stringify(iconInfo)};
export const iconNumbers = ${fileCount};`;

  await fs.outputFile(path.resolve(paths.icon, "../index.ts"), exports.join("\n") + infoContent);
  console.log("Built Successfully!: index.ts");
}

/**
 * 构建 global.d.ts
 * @param data IconData[]
 */
export async function buildType(data: IconData[]) {
  const exports: string[] = [];
  for (const item of data) {
    exports.push(`${item.componentName}: typeof import('birdpaper-icon')['${item.componentName}'];`);
  }

  const typeContent = getType({ exports });
  await fs.outputFile(path.resolve(paths.icon, "../global.d.ts"), typeContent);
  console.log("Built Successfully!: global.d.ts");
}

/**
 * 构建 components.ts
 */
export async function buildComponents() {
  let files = (await fs.readdir(paths.icon, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  files = files.map((item) => toPascalCase(item));

  await fs.outputFile(
    path.resolve(paths.root, "components.ts"),
    `import { ${files.join(",\n")} } from "@birdpaper-icon/components";\nexport default [${files.join(",\n")}];`
  );
  console.log("Built Successfully!: components.ts");
}
