#!/usr/bin/env node
// @ts-check
import fs from "fs/promises";
import path from "path";
import Excel from "exceljs";

const cwd = process.cwd();

const configFilePath = path.join(cwd, "better-excel-csv.config.json");
if (!await fs.stat(configFilePath).catch(() => false)) {
    console.error("Error: Config file not found. Search path:", configFilePath);
    process.exit(1);
}
const configFile = (await fs.readFile(configFilePath)).toString();
const config = JSON.parse(configFile);

const workbook = new Excel.Workbook();
await workbook.xlsx.readFile(config.input);

for (const { sheet, file } of config.outputs) {
    await workbook.csv.writeFile(path.join(cwd, file), {
        encoding: config.options.encoding,
        sheetName: sheet,
        dateFormat: "DD.MM.YYYY",
        formatterOptions: {
            delimiter: config.options.delimiter,
        },
    });
    console.log("✔︎ Wrote", file);
}
console.log("✅ Done");