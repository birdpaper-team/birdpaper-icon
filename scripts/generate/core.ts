import path from "path";
import glob from "glob";
import fs from "fs-extra";
import { JSDOM } from "jsdom";
import { optimize } from "svgo";
import svgoConfig from "./svgo.config";
import { getVue3Component, getType, getComponentIndex } from "./vue-template";
import { resolvePath, toPascalCase } from "./helper";

const root = process.cwd();
const svgIconCwd = resolvePath(root, "../svg");
const paths = {
  root: resolvePath("../birdpaper-icon"),
  icon: resolvePath("../components/src"),
};

interface IconData {
  name: string;
  path: string;
  componentName: string;
}

/**
 * @description 获取所有的 Icon 信息
 * @returns IconData[]
 */
export function getIcons(): {
  iconList: IconData[];
  iconType: string[];
  iconInfo: { name: string; list: string[] }[];
} {
  try {
    const iconList: IconData[] = [];
    let iconType = glob.sync(`${svgIconCwd}/**/`, { cwd: svgIconCwd, absolute: true });

    iconType.splice(0, 1);
    iconType = iconType.map((item: string) => {
      const splitArr = item.split("/");
      return splitArr[splitArr.length - 2];
    });

    const iconInfo = iconType.map((type) => ({
      name: type,
      list: getSvgByDir(`${svgIconCwd}/${type}/`),
    }));

    const files = glob.sync(`${svgIconCwd}/**/*.svg`, { cwd: svgIconCwd, absolute: true });

    for (const filePath of files) {
      const name = `icon-${path.basename(filePath, ".svg")}`;
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
 * @description 生成 Icon 组件
 * @param iconList
 */
export async function generateIconComponent(iconList: IconData[]) {
  await fs.emptyDir(paths.icon);

  const tasks = iconList.map(async (item) => {
    const svgFile = await fs.readFile(item.path, "utf8");
    const optimizedSvg = optimize(svgFile, { path: item.path, ...svgoConfig });

    if ("data" in optimizedSvg) {
      const { data } = optimizedSvg;
      const svgElement = JSDOM.fragment(data).firstElementChild;
      if (svgElement) {
        let str = svgElement.outerHTML.replace(new RegExp('fill="currentColor"', "g"), "");

        await fs.outputFile(
          path.resolve(paths.icon, `${item.name}/${item.name}.vue`),
          getVue3Component({
            name: item.name,
            componentName: item.componentName,
            svgHtml: str,
          })
        );
      }
    }

    await fs.outputFile(path.resolve(paths.icon, `${item.name}/index.ts`), getComponentIndex(item));
  });

  await Promise.all(tasks);

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

  fs.outputFile(path.resolve(paths.icon, "../index.ts"), exports.join("\n") + infoContent, (err) => {
    if (err) {
      console.log(`Built Failed: ${err}`);
      return;
    }

    console.log("Built Successfully!: index.ts");
  });
}

/**
 * 构建 global.d.ts
 * @param data IconData[]
 */
export function buildType(data: IconData[]) {
  const exports: string[] = [];
  for (const item of data) {
    exports.push(`${item.componentName}: typeof import('birdpaper-icon')['${item.componentName}'];`);
  }

  const typeContent = getType({ exports });

  fs.outputFile(path.resolve(paths.icon, "../global.d.ts"), typeContent, (err) => {
    if (err) {
      console.log(`Build Type Failed: ${err}`);
      return;
    }
    console.log("Built Successfully!: global.d.ts");
  });
}

/**
 * 构建 components.ts
 */
export async function buildComponents() {
  let files = (await fs.readdir(paths.icon, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  files = files.map((item) => (item = toPascalCase(item)));

  fs.outputFile(path.resolve(paths.root, "components.ts"), `import { ${files.join(",\n")} } from "@birdpaper-icon/components";
export default [${files.join(",\n")}];`, (err) => {
    if (err) {
      console.log(`Build Type Failed: ${err}`);
      return;
    }
    console.log("Built Successfully!: components.ts");
  });
}
