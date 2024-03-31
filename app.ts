#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("\n\t Welcome to my ATM Machine \n\t"));

let myBalance: number = 50000;
let myPin: number = 54321;
let myAccNumber: number = 22334455;

let account = await inquirer.prompt([
    {
        name: "my_account",
        type: "number",
        message: chalk.green("Enter your Account Number: ")
    }
])
if(account.my_account === myAccNumber){
    console.log(chalk.bgBlue("Congratulations! your account number is correct"))

    let account1 =await inquirer.prompt([
        {
            name: "my_pin",
            type: "number",
            message:chalk.green( "Enter your account pin: ")
        }
    ])
    
    if(account1.my_pin === myPin){
        console.log(chalk.bgBlue("Your account pin is correct"))
    }else{
        console.log(chalk.red("your account pin incorrect"))
    }
    let operations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message:chalk.green( "choose the operation you want to perform! "),
            choices: ["check_balance", "withdraw_amount", "fast_cash", "deposit_cash"]
        }
    ])
    if(operations.operation === "check_balance"){
        console.log(chalk.bgBlue(`Your current balance is ${myBalance} `))
    }else if(operations.operation === "withdraw_amount"){
        let askuser = await inquirer.prompt([
            {
                name: "withdraw_amount",
                type: "number",
                message:chalk.green( "Enter the amount you want to withdraw")
            }
        ])
        if(askuser.withdraw_amount < myBalance){
            myBalance -= askuser.withdraw_amount
            console.log(chalk.bgBlue(`your remaining balance is ${myBalance}`))
        }else if(askuser.withdraw_amount > myBalance){
            console.log(chalk.bgBlue(`You have insufficient balance, your balance is ${myBalance}`))
        }
        
    }else if(operations.operation === "fast_cash"){
        let askuser2 = await inquirer.prompt([
            {
                name: "fast_amount",
                type: "list",
                message:chalk.green("choose the amount you want "),
                choices: [1000, 2000, 5000, 10000, 15000, 20000]
            }
        ])
        if(askuser2.fast_amount < myBalance){
            myBalance -= askuser2.fast_amount
            console.log(chalk.magenta(myBalance));
            console.log(chalk.magenta("You successfully withdrawl your amount"))
           }

        if(askuser2.fast_amount > myBalance){
            console.log(chalk.cyan("you have insufficient balance kindly recharge your account"))
            console.log(chalk.cyan(`Your balance is ${myBalance}`))
            }
    }else if(operations.operation === "deposit_cash"){
        let askuser3 = await inquirer.prompt([
            {
                name: "amount_deposit",
                type: "number",
                message: chalk.green("Enter the amount you want to deposit")
            }
        ])

        myBalance += askuser3.amount_deposit;
        console.log(chalk.cyan(`Your current balance is ${myBalance}`))
    
    }

else{
    console.log(chalk.red("Your account number is incorrect"))
}

}
