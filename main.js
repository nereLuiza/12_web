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

    for(i = 0; i < 6; i++) {
        alert("RODADA " + i + "\n"
            + "Vida: " + vida + "\n"
            + "Força: " + forca + "\n"
            + "Dinheiro: " + dinheiro
        );

        if(vida > 0) {
            dado = jogarDado();
            alert("Você tirou " + dado + " no dado.");
            alert(consequencias[dado-1].desc);
            vida = vida + consequencias[dado-1].dano;
            dinheiro = dinheiro + consequencias[dado-1].dinheiro;
        }
        else {
            alert("Você perdeu. Jogo Encerrado.");
            break;
        }
        if(vida > 0 && i == 5) {
            alert("Ufa! Você sobreviveu a todas as rodadas. Parabéns, " + nome);
        }
    }

}

function heroProperties () {
    nome = prompt("Insira o nome do herói: ");
    vida = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    forca = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    dinheiro = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
}

function jogarDado() {
    return Math.floor(Math.random() * (6- 1 + 1)) + 1;
}

const consequencias = [
    {
        desc: 'Você encontra um zumbi muito irritado.',
        dano: -8,
        dinheiro: -10,
    },
    {
        desc: 'Você foi ao bar e entrou em briga embriagado, foi espancado.',
        dano: -10,
        dinheiro: -20,
    },
    {
        desc: 'Você é abordado por um ladrão.',
        dano: -2,
        dinheiro: -100,
    },
    {
        desc: 'Você comeu um cogumelo venenoso.',
        dano: -20,
        dinheiro: -1,
    },
    {
        desc: 'Você venceu uma luta de rua.',
        dano: -4,
        dinheiro: 15,
    },
    {
        desc: 'Você é sequetrado pelo Thiaguitoz e utilizado de rato de laboratório.',
        dano: -100,
        dinheiro: -100,
    }
]