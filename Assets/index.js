const inquirer = require('inquirer');
const Trainer = require('./trainer');
let trainerArr = [new Trainer('Kayla'), new Trainer('Jesse')];

const question1 = [
    {
        name: 'initial',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add Trainer', 'Add Pokemon', 'Get Random Pokemon', 'Quit'],
    }
]


const addTrainer = [
    {
        name: 'trainer',
        type: 'input',
        message: 'Who is your trainer name'
    }
]

const getRandom = [
    {
        name: 'random',
        type: 'list',
        choices: trainerArr,
        message: 'Which Trainer'
    }
]

const addPokemon = [
    {
        name: 'pokeTrainer',
        type: 'list',
        choices: trainerArr,
        message: 'Which trainer does this Pokemon belong to?'
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
]


const game = async()=>{
    let again = true;
    do {
        const answerSetOne = await inquirer.prompt(question1);
        const { initial } = answerSetOne;
        let answerSetTwo;
        let newTrainer;
        let me;

        switch(initial){
            case 'Add Trainer':
                answerSetTwo = await inquirer.prompt(addTrainer);
                const { trainer } = answerSetTwo;
                newTrainer = new Trainer(trainer);
                trainerArr.push(newTrainer);
                console.table(trainerArr);
                break;
            case 'Add Pokemon':
                answerSetTwo = await inquirer.prompt(addPokemon);
                const {pokeTrainer, pokemon, hp, atk} = answerSetTwo;
                me = trainerArr.filter(({name})=> name == pokeTrainer);
                me[0].addPokemon(pokemon, hp, atk);
                console.table(JSON.stringify(trainerArr, null, 4));
            case 'Get Random Pokemon':
                answerSetTwo = await inquirer.prompt(getRandom);
                const { random } = answerSetTwo;
                me = trainerArr.filter(({name}) => name == random);
                if(me[0].pokemon <= 0){
                    console.log('You have no Pokemon, go catch one you scrub!');
                }else{
                    let retPokemon = me[0].getRandomPokemon()
                    const {name, hp, atk, level} = retPokemon
                    console.log(name,'\n', hp,'\n', atk,'\n', level);
                }
                break;

            case 'Quit':
                again = false;
                break;

            default:
                throw new Error("YOu broke the thing");
        }

    }while(again == true);
}
game();