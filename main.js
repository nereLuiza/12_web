let nome, vida, forca, dinheiro;
let dado;

function start() {
    let i;
    heroProperties();

    alert("O cientista do mal Thiaguitoz, anos atrás, sintetizou um vírus "
        + "que leva os infectados a se comportarem como zumbis. Nosso herói, "
        + nome + ", faz parte de um grupo de pessoas que lutam para sobreviver "
        + "e encontrar o antídoto para salvar os infectados."
    )

    for(i = 0; i < 11; i++) {
        alert("RODADA " + i + "\n"
            + "Vida: " + vida + "\n"
            + "Força: " + forca + "\n"
            + "Dinheiro: " + dinheiro
        );

        if(vida > 0) {
            dado = jogarDado();
            alert("Você tirou " + dado + " no dado.");
            
        }
        else {
            alert("Você perdeu. Jogo Encerrado.");
            break;
        }


    }

}

function heroProperties () {
    nome = prompt("Insira o nome do herói: ");
    vida = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    forca = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    dinheiro = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
}

function jogarDado() {
    return Math.floor(Math.random() * (8 - 1 + 1)) + 1;
}

const consequencias = [
    {
        desc: 'Você encontra um zumbi muito irritado.',
        dano: -8,
    },
    {
        desc: 'Você foi ao bar e entrou em briga embriagado, foi espancado.',
        dano: -10,
    },
    {
        desc: 'Você é abordado por um ladrão.',
        dano: -2,
    },
    {
        desc: 'Você comeu um cogumelo venenoso.',
        dano: -20,
    },
    {
        desc: 'Você venceu uma luta de rua.',
        dano: -4,
    },
    {
        desc: 'Você '
    }

]