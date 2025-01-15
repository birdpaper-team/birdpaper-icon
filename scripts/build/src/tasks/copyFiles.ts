import { join } from "path";
import { bpIconRoot, distPkgRoot, projRoot, compRoot, themeRoot } from "../paths";
import { cpFile } from "../utils";

export const copyFiles = async () => {
  /** Files to be copied. */
  const files: string[][] = [
    [join(distPkgRoot, "theme/index.css"), join(distPkgRoot, "/dist/index.css")],
    [join(themeRoot, "index.scss"), join(distPkgRoot, "/theme/index.scss")],
    [join(bpIconRoot, "package.json"), join(distPkgRoot, "package.json")],
    [join(compRoot, "global.d.ts"), join(distPkgRoot, "global.d.ts")],
    [join(projRoot, "README.md"), join(distPkgRoot, "README.md")],
  ];

  /** Folders to be copied. */
  return new Promise<void>((resolve, reject) => {
    files.map(async ([from, to]: string[]) => {
      return await cpFile(from, to)
        .then(() => {
          console.log("File copied successfully.");
          resolve();
        })
        .catch((err) => {
          console.error("Error copying file:", err);
          reject();
        });
    });
  });
};
