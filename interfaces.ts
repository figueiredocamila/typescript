interface Game {
  id?: string | number;
  title: string;
  description: string;
  readonly genre: string; // propriedade pode somente ser lida e nao modificada
  platform?: string[];
  getSimilars?: (title: string) => void; // quando um metodo for opcinal deve-se primeiro certificarse se ele existe para entao chama-lo
};

const tlou: Game = {
  id: 123,
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A plague Tale, Metro`);
  },
};

console.log(tlou.genre);

if(tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
};

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
};

const leftbehind: DLC = {
  title: "The Last of Us - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"],
};

class CreateGame implements Game { // usando o implements significa que a classe precisa ter todos os tipo da interface
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }; 
};

// VANTAGENS DO USO DE INTERFACE

// Quando tiver criando libs, prefira Interfaces, porque são mais extensíveis
// Criando objetos/classes (POO)