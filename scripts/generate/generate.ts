import path from "path";
import glob from "glob";
import fs from "fs-extra";
import { JSDOM } from "jsdom";
import { optimize } from "svgo";
import svgoConfig from "./svgo.config";
import { getIconVueComponent, getBpVueIcon, getIndex, getType, getNewIndex, getNewComponentIndex } from "./vue-template";
import { resolvePath, toPascalCase } from "./helper";

const root = process.cwd();
/** SVG 资源路径 */
const svgIconCwd = resolvePath(root, "./svg");
const paths = {
  icon: resolvePath("./components/src"),
};

interface IconData {
  name: string;
  path: string;
  componentName: string;
}

/**
 * 获取需要转换的 Icon 列表
 * @returns IconData[]
 */
export function getIconComponents(): {
  iconList: IconData[];
  iconType: string[];
  iconInfo: { name: string; list: string[] }[];
} {
  try {
    const iconList: IconData[] = [];
    let iconType = glob.sync(`${svgIconCwd}/**/`, { cwd: svgIconCwd, absolute: true });
    const files = glob.sync(`${svgIconCwd}/**/*.svg`, { cwd: svgIconCwd, absolute: true });

    iconType.splice(0, 1);
    iconType = iconType.map((item: string) => {
      const splitArr = item.split("/");
      return splitArr[splitArr.length - 2];
    });
    let iconInfo: { name: string; list: string[] }[] = [];

    for (let i = 0; i < iconType.length; i++) {
      const element = iconType[i];
      iconInfo.push({
        name: element,
        list: getIconsByDir(`${svgIconCwd}/${element}/`),
      });
    }

    for (const filePath of files) {
      const name = `icon-${path.basename(filePath, ".svg")}`;
      iconList.push({
        name,
        path: filePath,
        componentName: `${toPascalCase(name)}`,
      });
    }

    return { iconList, iconType, iconInfo };
  } catch (error) {
    console.log("[ error ]-getIconComponents", error);
    return { iconList: [], iconType: [], iconInfo: [] };
  }
}

function getIconsByDir(dir: string) {
  const folders = fs.readdirSync(dir);

  return folders.map((item) => {
    return item.split(".svg")[0];
  });
}

function replaceAll(string: string, search: string, replace: string) {
  return string.split(search).join(replace);
}

/**
 * 构建 Icon 的 Vue 组件
 * @param iconList IconData[]
 */
export async function generateIconComponent(iconList: IconData[]) {
  await fs.emptyDir(path.resolve(root, "components/src"));

  for (let i = 0; i < iconList.length; i++) {
    const item = iconList[i];
    const svgFile = fs.readFileSync(item.path, "utf8");
    const optimizedSvg = optimize(svgFile, { path: item.path, ...svgoConfig });

    if ("data" in optimizedSvg) {
      const { data } = optimizedSvg;
      const svgElement = JSDOM.fragment(data).firstElementChild;
      if (svgElement) {
        let str = replaceAll(svgElement.outerHTML, 'fill="currentColor"', "");

        fs.outputFile(
          path.resolve(paths.icon, `${item.name}/${item.name}.vue`),
          getIconVueComponent({
            name: item.name,
            componentName: item.componentName,
            svgHtml: str,
          }),
          (err: any) => {
            if (err) {
              console.log(`BuildComponents ${item.componentName} Failed: ${err}`);
              return;
            }
            console.log(`BuildComponents ${item.componentName} Success!`);
          }
        );
      }
    }

    fs.outputFile(path.resolve(paths.icon, `${item.name}/index.ts`), getNewComponentIndex(item), (err) => {
      if (err) {
        console.log(`BuildIndex ${item.componentName} Failed: ${err}`);
        return;
      }
      console.log(`BuildIndex ${item.componentName} Success!`);
    });
  }
}

/**
 * 构建 Icon 集合 birdpaper-icon.ts && index.ts
 * @param data IconData[]
 */
export function buildIconIndex(data: IconData[], iconType: string[], iconInfo: { name: string; list: string[] }[]) {
  const imports: string[] = [];
  const exports: string[] = [];
  const components: string[] = [];

  for (const item of data) {
    components.push(item.componentName);
    imports.push(`import ${item.componentName} from './${item.name}';`);
    exports.push(`export { default as ${item.componentName} } from './${item.name}';`);
  }

  const bpContent = getBpVueIcon({ imports, components, iconType, iconInfo });
  const indexContent = getIndex({ exports, iconType, iconInfo });

  fs.outputFile(path.resolve(paths.icon, "birdpaper-icon.ts"), bpContent, (err) => {
    if (err) {
      console.log(`Build BpVueIcon Failed: ${err}`);
      return;
    }
    console.log("Build BpVueIcon Success!");
  });

  fs.outputFile(path.resolve(paths.icon, "index.ts"), indexContent, (err) => {
    if (err) {
      console.log(`Build Index Failed: ${err}`);
      return;
    }
    console.log("Build Index Success!");
  });
}

export function newBuildIndex(data: IconData[], iconType: string[], iconInfo: { name: string; list: string[] }[]) {
  // const imports: string[] = [];
  const exports: string[] = [];
  // const components: string[] = [];

  for (const item of data) {
    // components.push(item.componentName);
    // imports.push(`import ${item.componentName} from './${item.name}';`);
    exports.push(`export * from './${item.name}';`);
  }

  const indexContent = getNewIndex({ exports });

  // export const iconType = [${iconType.map((item) => `"${item}"`)}];
  // export const iconInfo = ${JSON.stringify(iconInfo)};

  fs.outputFile(path.resolve(paths.icon, "info.ts"), indexContent, (err) => {
    if (err) {
      console.log(`Build Index Failed: ${err}`);
      return;
    }
    console.log("Build Index Success!");
  });

  fs.outputFile(
    path.resolve(paths.icon, "index.ts"),
    `export const iconType = [${iconType.map((item) => `"${item}"`)}];
     export const iconInfo = ${JSON.stringify(iconInfo)};`,
    (err) => {
      if (err) {
        console.log(`Build Index Failed: ${err}`);
        return;
      }
      console.log("Build Index Success!");
    }
  );
}

/**
 * 构建 icon-components.ts
 * @param data IconData[]
 */
export function buildType(data: IconData[]) {
  const exports: string[] = [];
  for (const item of data) {
    exports.push(`${item.componentName}: typeof import('birdpaper-icon/components')['${item.componentName}'];`);
  }

  const typeContent = getType({ exports });

  fs.outputFile(path.resolve(paths.icon, "icon-components.ts"), typeContent, (err) => {
    if (err) {
      console.log(`Build Type Failed: ${err}`);
      return;
    }
    console.log("Build Type Success!");
  });
}
