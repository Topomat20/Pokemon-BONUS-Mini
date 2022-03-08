class Pokemon {
    constructor(name, atk){
        this.name = name;
        this.atk = atk;
        this.hp = 100;
        this.level = 1;
    }

    printInfo(){
        console.log(`This level ${this.level} ${this.name} has ${this.hp} hp with an atk of ${this.atk}`);
    }
}

const pokemon = new Pokemon('Bulbazor', 20)
console.log(pokemon);
pokemon.printInfo()

module.exports = pokemon