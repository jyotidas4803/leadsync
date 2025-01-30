import { text, isCancel, cancel } from "@clack/prompts";

// Handling CLI Arguments
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).help("h").alias("h", "help").parse();

export default async function () {
  let { input, output, errors } = argv;

  //  Prompt if the values are not in CLI arguments
  if (!(input && output && errors)) {
    input = await text({
      message: "What is your input file?",
      placeholder: "The csv file to read",
      initialValue: "leads.csv",
      validate(value) {
        if (!value.toLowerCase().endsWith(".csv"))
          return `Only csv files are supported!`;
      },
    });

    output = await text({
      message: "What will be the output file?",
      placeholder: "The output csv file",
      initialValue: "final.csv",
      validate(value) {
        if (!value.toLowerCase().endsWith(".csv"))
          return `Only csv files are supported!`;
      },
    });

    errors = await text({
      message: "What will be the errors file?",
      placeholder: "The csv file for errors",
      initialValue: "report.csv",
      validate(value) {
        if (!value.toLowerCase().endsWith(".csv"))
          return `Only csv files are supported!`;
      },
    });

    if (isCancel(input) || isCancel(output) || isCancel(errors)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }
  }

  return { input, output, errors };
}