import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'firstNumber',
        message: 'Please enter your first number: ',
    },
    {
        type: 'number',
        name: 'secondNumber',
        message: 'Please enter your second number: ',
    },
    {
        type: 'list',
        name: 'operator',
        choices: ['+', '-', '*', '/'],
        message: 'Select operation: ',
    },
]);
if (answer.operator == '+') {
    console.log('Your answer is', answer.firstNumber + answer.secondNumber);
}
else if (answer.operator == '-') {
    console.log('Your answer is', answer.firstNumber - answer.secondNumber);
}
else if (answer.operator == '*') {
    console.log('Your answer is', answer.firstNumber * answer.secondNumber);
}
else {
    console.log('Your answer is', answer.firstNumber / answer.secondNumber);
}
