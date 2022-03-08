const inquirer = require('inquirer');
const Trainer = require('./trainer');
let trainerArr = [new Trainer('Kayla'), new Trainer('Jesse')];

const question1 = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Add Trainer', 'Add Pokemon', 'Get Random Pokemon'],
        },
    ])
};

const addTrainer = () => {
    inquirer
    .prompt([
        {
            name: 'trainer',
            type: 'input',
            message: 'Who is your trainer name'
        }
    ])
}

const addPokemon = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            choices: 'trainerArr',
            message: 'Which trainer does this Pokemon belong to?',
            name: 'pokeTrainer'
        },
        {
            name: 'pokemon',
            type: 'input',
            message: 'What is the Pokemons name?'
        },
        {
            name: 'hp',
            type: 'input',
            message: 'What is the hp?'
        },
        {
            name: 'atk',
            type: 'input',
            message: 'What is the atk pwr?'
        }
    ])
}

let again = true;

const game = async()=>{
    do {
        const {answerSetOne} = await inquirer.prompt(question1);
        const {initial} = answerSetOne;
        let answerSetTwo;

        switch(initial){
            case 'Add Trainer':
                answerSetTwo = await inquirer.prompt(addTrainer);
                const {trainer} = answerSetTwo;
                newTrainer = new Trainer(trainer);
                trainerArr.push(newTrainer);
                console.table(trainerArr);
                break;
            case 'Add Pokemon':
                answerSetTwo = await inquirer.prompt(addPokemon)
                const {pokeTrainer, pokemon, hp, atk} = answerSetTwo
                pokeTrainer.addPokemon(pokemon, hp, atk)
                console.table(trainerArr)

            case 'Quit':
                again = false;
                break;

            default:
                throw new Error("YOu broke the thing")
        }

    }while(again == true)
}
game();