import { series, parallel } from "gulp";
import { buildModules, buildBundle, copyFiles } from "./src/tasks";

export default series(parallel(buildModules));
// export default series(parallel(buildModules, buildBundle), copyFiles);
