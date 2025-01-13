#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { Command } from "commander";
import { getIconComponents, generateIconComponent, buildIconIndex, buildType, newBuildIndex } from "./generate";

const program = new Command();
const packageContent = fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8");
const packageData: any = JSON.parse(packageContent);

program.version(packageData.version).name("icon-scripts").usage("command [options]");

program
  .command("generate")
  .description("Icon generate...")
  .action(async () => {
    const { iconList, iconType, iconInfo } = getIconComponents();
    await generateIconComponent(iconList);
    newBuildIndex(iconList, iconType, iconInfo);
    // buildIconIndex(iconList, iconType, iconInfo);
    // buildType(iconList);
  });
program.parse(process.argv);
