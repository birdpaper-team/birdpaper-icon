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

  const results = await Promise.allSettled(
    files.map(async ([from, to]: string[]) => {
      await cpFile(from, to);
      console.log("File copied successfully.");
    })
  );

  const failures = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  if (failures.length > 0) {
    failures.forEach((f) => console.error("Error copying file:", f.reason));
    throw new Error(`Failed to copy ${failures.length} file(s)`);
  }
};
