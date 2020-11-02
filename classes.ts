abstract class UserAccount { // classes abstratas nao permitem que sejam criadas instancias dela mas podem ser extendidas
  public name: string; // o modifier public está implicido em todas as propriedades, permitindo que seu valor possa ser lido ou modificado externamente
  protected age: number; // permite que a propriedade pode ser chamada dentro da sua classe ou a que estar extendendo mas não consegue ser chamada fora da classe

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string; // com o private nenhum lugar externo pode chamar o alterar a propriedade e só pode ser chamada dentro de sua classe
  level: number; // readonly: a propriedade pode ser lida mas não editada externamentes

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age); // pega os dados da classe superior 

    this.nickname = nickname;
    this.level = level;
  };

  get getLevel() {
    console.log("-------GET--------")
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} has the char ${this.nickname} at level ${this.level}`)
  }
}

// const will = new UserAccount("Willian", 30);
// console.log(will);
// will.logDetails();

const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
console.log(john.level)
john.logDetails();
john.logCharDetails();

john.setLevel = 499;

console.log(john.getLevel);

// mais recomendado:
// na maioria das vezes
// React - Props
