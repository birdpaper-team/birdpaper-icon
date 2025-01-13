#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { Command } from "commander";
import { getIcons, generateIconComponent, buildType, buildIndex } from "./core";

const program = new Command();
const packageContent = fs.readFileSync(path.resolve(__dirname, "../../../package.json"), "utf8");
const packageData: any = JSON.parse(packageContent);

program.version(packageData.version).name("icon-scripts").usage("command [options]");

program
  .command("generate")
  .description("Icon generate...")
  .action(async () => {
    const { iconList, iconType, iconInfo } = getIcons();
    await generateIconComponent(iconList);
    buildIndex(iconList, iconType, iconInfo);
    buildType(iconList);
  });
program.parse(process.argv);
