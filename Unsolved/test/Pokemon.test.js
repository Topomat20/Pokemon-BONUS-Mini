const Pokemon = require("../lib/Pokemon.test");
const Trainer = require("../lib/Trainer.test")
class Pokemon {
  constructor(name, hp, atk, level){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.level = level;
  }
}
describe("Pokemon class", () => {
  it("sets first agrument as name property", () => {
    expect(new Pokemon("Charmander",120,10).name).toBe("Charmander");
  });

  it("sets second argument as hp property", () => {
    expect(new Pokemon("Charmander",120,10).hp).toBe(120);
  });

  it("sets third argument as atk property", () => {
    expect(new Pokemon("Charmander",120,10).atk).toBe(10);
  });

});

module.exports = Pokemon;