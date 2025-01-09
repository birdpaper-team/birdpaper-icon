import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const bpIconRoot = resolve(pkgRoot, "birdpaper-icon");
export const compRoot = resolve(pkgRoot, "components/src");

export const distRoot = resolve(projRoot, "dist");
export const distPkgRoot = resolve(distRoot, "birdpaper-icon");
