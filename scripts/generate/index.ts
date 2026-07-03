#!/usr/bin/env node

import path from "path";
import fs from "fs-extra";
import { Command } from "commander";
import { getIcons, generateIconComponent, buildType, buildIndex, buildComponents } from "./core";

const program = new Command();
const packageContent = fs.readFileSync(path.resolve(__dirname, "../../../package.json"), "utf8");
const packageData: any = JSON.parse(packageContent);

program.version(packageData.version).name("icon-scripts").usage("command [options]");

program
  .command("generate")
  .description("Icon generate...")
  .action(async () => {
    const { iconList, iconType, iconInfo } = await getIcons();
    await generateIconComponent(iconList);
    await buildIndex(iconList, iconType, iconInfo);
    await buildType(iconList);
    await buildComponents();
  });
program.parse(process.argv);
