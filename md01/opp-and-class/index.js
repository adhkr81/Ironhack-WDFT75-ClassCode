const char = {
  name: "Link",
  age: "13",
  hp: 500,
  power: 5,

  takeDamage: (num) => {
    char.hp -= num;
  },
};

console.log(char.name);

console.log(char.hp);

char.takeDamage(100);

console.log(char.hp);

const char2 = {
  name: "Zelda",
  age: undefined,
  hp: 1000000000000,
  power: 90,

  takeDamage: (num) => {
    char.hp -= num;
  },
};

// Classe é basicamente uma construtora de objetos

class Characters {
  constructor(name, hp, power) {
    // Basicamente dentro do constructor eu digo onde eu vou salvar os parametros que eu recebi na hora de criar uma nova INSTANCIA DA CLASSE
    this.hp = hp;
    this.name = name;
    this.power = power;
    this.age = 13;
  }

  reciveDamage(damage) {
    this.hp -= damage;
    return this.hp;
  }
}

// const link = new Characters("Link", 500, 5);
// const zelda = new Characters("Zelda", 10000000000, 500);

// console.log(zelda.hp);
// console.log(link.power);
// console.log(zelda.age, link.age);

class PlayableChar extends Characters {
  constructor(name, hp, power, powerPerLevel, xpCap) {
    super(name, hp, power);
    this.powerPerLevel = powerPerLevel;
    this.xpCap = xpCap;
  }
}

const mario = new PlayableChar("Mario", 5, 3, 2, 100);

console.log(mario.xpCap);
console.log(mario.name);

mario.reciveDamage(2);

console.log(mario.hp);

console.log(mario.power);
