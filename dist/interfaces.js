;
var tlou = {
    id: 123,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A plague Tale, Metro");
    },
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
;
;
var leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    ;
    return CreateGame;
}());
;
// VANTAGENS DO USO DE INTERFACE
// Quando tiver criando libs, prefira Interfaces, porque são mais extensíveis
// Criando objetos/classes (POO)
//# sourceMappingURL=interfaces.js.map