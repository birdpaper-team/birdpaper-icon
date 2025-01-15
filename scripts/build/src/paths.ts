import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const bpIconRoot = resolve(pkgRoot, "birdpaper-icon");
export const compRoot = resolve(pkgRoot, "components");
export const themeRoot = resolve(pkgRoot, "theme");

export const distRoot = resolve(projRoot, "dist");
export const distPkgRoot = resolve(distRoot, "birdpaper-icon");
