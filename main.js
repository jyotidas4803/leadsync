#!/usr/bin/env node
import { intro, outro, log } from "@clack/prompts";
import prompt from "./lib/prompt.js";
import { readCSV, writeCSV } from "./lib/io.js";



async function main() {
  intro(`Lead Sync App start your csv validation`);

  const { input, output, errors } = await prompt();

  log.success(input);
  log.success(output);
  log.success(errors);

  outro("You're done!");
  // const csvData = readCSV(argv.input);
  // const [clean, errors] = core(csvData.body);
  // console.log("Validation rules complete ✅");

  // // Generate clean csv
  // writeCSV(argv.output, clean);
  // console.log("Write to clean done ✅");

  // // Generate report
  // writeCSV(argv.report, errors);
  // console.log("Generated report successfully! ✅");
}

await main();