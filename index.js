#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number ", type: "number", name: "firstnumber" },
    { message: "Enter Second Number ", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform action ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answer)
if (answer.operator === "Addition") {
    console.log("Your Value is ", answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your Value is ", answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your Value is ", answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log("Your Value is ", answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Select Valid Operator ");
}
