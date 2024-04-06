#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(                                                                      );
console.log(chalk.greenBright("                        Welcome To The Currency Convertor From Muhammad Samad"));
console.log(                                                                      );


async function convertCurrency() {
    let currency: any = {
        USD: 1,
        PKR: 277.54,
        INR: 83.30,
        SAR: 3.75,
        AED: 3.67
    }

    let user_options: any = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: chalk.italic.magentaBright("Which currency do you want to convert?"),
            choices: ["USD", "PKR", "INR", "SAR", "AED"]
        },
        {
            name: "to",
            type: "list",
            message: chalk.italic.magentaBright("Enter currency to convert?"),
            choices: ["USD", "PKR", "INR", "SAR", "AED"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.italic.magentaBright("Enter your amount")
        }
    ]);

    let fromCurrency = currency[user_options.from];
    let toCurrency = currency[user_options.to];
    let amount = user_options.amount;

    if (isNaN(amount)) {
        console.log(chalk.italic.redBright("Please enter a valid amount."));
        return;
    }

    if (fromCurrency === undefined || toCurrency === undefined) {
        console.log(chalk.italic.redBright("Invalid currency selected."));
        return;
    }

    let baseAmount = amount / fromCurrency;
    let result = baseAmount * toCurrency;
    console.log(chalk.yellowBright(`Converted amount: `) + result.toFixed(2) + chalk.hex(`#87CEEB`)(` ${user_options.to}`));
    console.log(chalk.greenBright("                                  Thanks For Using This App"));
    console.log(                                                                      );    
}

convertCurrency();
