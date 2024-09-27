function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome;
let vida = getRandomInt(1, 20);
let forca = getRandomInt(1, 20);
let dinheiro = getRandomInt(1, 120);

readline.question("Insira o nome do herói: ", (nome) =>{
    if(nome != null)
        readline.pause();
});

readline.question("O herói %s está pronto!\nVida: %i\n"
                + "Força: %i, Dinheiro: %i\nPara iniciar, "
                + "digite 'start()'\n", nome, vida, forca, dinheiro, (answer) =>{
                    if(answer == "start()") 
                        readline.pause();
                    else
                        console.log("Jogo Encerrado.");
                });

console.log("RODADA 1: ");