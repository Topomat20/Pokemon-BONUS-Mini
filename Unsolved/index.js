const inquirer = require('inquirer');
const Pokemon = require('./pokemon');
const Trainer = require('./trainer')

const askQuestion = () => {
    inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your Trainer name?'
        },
        {
            name: 'choice',
            type: 'list',
            message: 'Do you want to pick your own pokemon or generate a random one?',
            choices: ['Pick my own','Choose random']
        }
    ])
    .then(ans => {
        if(ans.choice === 'Pick my own') {
            pokemonPick();
        } else {
            console.log("random")
        }
    });
};

const pokemonPick = ()=>{
    inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Who is your pokemon?'
        }
    ])
}
askQuestion();