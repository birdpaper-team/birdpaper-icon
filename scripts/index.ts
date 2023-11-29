#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { Command } from "commander";
import { getIconComponents, generateIconComponent, buildIconIndex, buildType } from "./iconGenerate";

const program = new Command();

const packageContent = fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8");
const packageData: any = JSON.parse(packageContent);

program.version(packageData.version).name("bp-vue-scripts").usage("command [options]");

program
  .command("icon:generate")
  .description("icon:generate...")
  .action(async () => {
    const data = getIconComponents();
    await generateIconComponent(data);
    buildIconIndex(data);
    buildType(data);
  });

program.parse(process.argv);
