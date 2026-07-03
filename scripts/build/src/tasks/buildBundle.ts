import fs from "fs-extra";
import { join } from "path";
import { distPkgRoot } from "../paths";
import * as esbuild from "esbuild";

/**
 * buildBundle：将 buildModules 已产出的 ES index 转换为 IIFE 格式
 * 使用 esbuild 直接转换，内存开销极小（无需 Rollup + Vue 编译）
 */
export async function buildBundle() {
  const name = "BirdpaperIcon";
  const outDir = join(distPkgRoot, "dist");
  const esDir = join(distPkgRoot, "es");
  const indexMjs = join(esDir, "index.mjs");

  await fs.ensureDir(outDir);

  console.log("[buildBundle] Converting ES module to IIFE via esbuild...");

  await esbuild.build({
    entryPoints: [indexMjs],
    bundle: true,
    format: "iife",
    globalName: name,
    outfile: join(outDir, "birdpaper-icon.js"),
    minify: true,
    external: ["vue"],
    target: "es2018",
  });

  // 复制 ES 和 CJS 的 index 到 dist 目录
  await fs.copy(indexMjs, join(outDir, "birdpaper-icon.mjs"));
  const indexCjs = join(distPkgRoot, "lib", "index.cjs");
  if (await fs.pathExists(indexCjs)) {
    await fs.copy(indexCjs, join(outDir, "birdpaper-icon.cjs"));
  }

  console.log("[buildBundle] All formats built successfully.");
}
