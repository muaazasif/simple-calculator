#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(
  chalk.bold.rgb(255, 153, 0)("🌈 Welcome to the Amazing Calculator! 🌟")
);
console.log(
  chalk.yellowBright("🦄 Let's sprinkle some magic into your math! 🌈")
);

const answer = await inquirer.prompt([
  {
    message: chalk.magentaBright("Enter First Number "),
    type: "number",
    name: "firstnumber",
  },
  {
    message: chalk.magentaBright("Enter Second Number "),
    type: "number",
    name: "secondnumber",
  },
  {
    message: chalk.cyanBright("Select one of the operators to perform action "),
    type: "list",
    name: "operator",
    choices: [
      { name: chalk.blueBright("➕ Addition"), value: "Addition" },
      { name: chalk.blueBright("➖ Subtraction"), value: "Subtraction" },
      { name: chalk.blueBright("✖️ Multiplication"), value: "Multiplication" },
      { name: chalk.blueBright("➗ Division"), value: "Division" },
    ],
  },
]);

// console.log(answer)
if (answer.operator === "Addition") {
  console.log(chalk.greenBright("🎉 Your Value is ", answer.firstnumber + answer.secondnumber));
} else if (answer.operator === "Subtraction") {
  console.log(chalk.greenBright("🎉 Your Value is ", answer.firstnumber - answer.secondnumber));
} else if (answer.operator === "Multiplication") {
  console.log(chalk.greenBright("🎉 Your Value is ", answer.firstnumber * answer.secondnumber));
} else if (answer.operator === "Division") {
  console.log(chalk.greenBright("🎉 Your Value is ", answer.firstnumber / answer.secondnumber));
} else {
  console.log(chalk.redBright("🛑 Please Select Valid Operator "));
}
