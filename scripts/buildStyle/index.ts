import path from "path";
import fs from "fs-extra";
import less from "less";
import CleanCSS from "clean-css";
import glob from "glob";
import { resolvePath } from "../utils/helper";

const root = process.cwd();

const run = async () => {
  const files = glob.sync("**/*.{less,js}", {
    cwd: resolvePath("style"),
  });

  for (const filename of files) {
    const absolute = resolvePath(`style/${filename}`);
    fs.copySync(absolute, resolvePath(`../es/${filename}`));
    fs.copySync(absolute, resolvePath(`../lib/${filename}`));

    if (/index\.scss$/.test(filename)) {
      console.log(`building ${filename}`);

      const lessContent = fs.readFileSync(absolute, "utf8");
      less.render(
        lessContent,
        {
          filename,
          paths: [resolvePath(`style/${path.dirname(filename)}`), root],
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else if (result && result.css) {
            const cssFilename = filename.replace(".scss", ".css");
            fs.writeFileSync(resolvePath(`../es/${cssFilename}`), result.css);
            fs.writeFileSync(resolvePath(`../lib/${cssFilename}`), result.css);
            console.log(`${filename} build success`);
          }
        }
      );
    }
  }

  const indexSassPath = resolvePath("style/index.scss");
  fs.copySync(indexSassPath, resolvePath("../es/index.scss"));
  fs.copySync(indexSassPath, resolvePath("../lib/index.scss"));

  const indexSass = fs.readFileSync(indexSassPath, "utf8");
  const result = await less.render(indexSass, {
    paths: [resolvePath("./style")],
  });

  fs.writeFileSync(resolvePath("../es/index.css"), result.css);

  const compress = new CleanCSS().minify(result.css);

  fs.writeFileSync(resolvePath("../es/index.min.css"), compress.styles);
};

export default run;
