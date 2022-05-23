const jogadores = {
    jogadas: [
        {
            nome: "Herman",
            jogada: 1
        },
        {
            nome: "Rhodes",
            jogada: 1
        },
        {
            nome: "Beach",
            jogada: 1
        },
        {
            nome: "Laurel",
            jogada: 1
        },
        {
            nome: "Beatrice",
            jogada: 1
        },
        {
            nome: "Alison",
            jogada: 1
        },
        {
            nome: "Saundra",
            jogada: 1
        },
        {
            nome: "Klein",
            jogada: 0
        }
    ]
};

/* function imprimirResultado(jogadores) {
    let jogador0 = null;
    let jogador1 = null;
    let soma = 0;
    let soma1 = 0;
    for (let i = 0; i < jogadores.jogadas.length; i++) {
        if (jogadores.jogadas[i].jogada === 0) {
            soma++;
            jogador0 = i;
        } else if (jogadores.jogadas[i].jogada === 1) {
            soma1++;
            jogador1 = i;
        }
    }
    if (soma === 1) {
        console.log(jogadores.jogadas[jogador0].nome);
    } else if (soma1 === 1) {
        console.log(jogadores.jogadas[jogador1].nome);
    } else {
        console.log("NENHUM");
    }
}
imprimirResultado(jogadores); */

function solucao(jogadores) {
    const jogaramZero = jogadores.filter(jogador => jogador.jogada === 0);
    const jogaramUm = jogadores.filter(jogador => jogador.jogada === 1);

    if (jogaramZero.length === 1) {
        console.log(jogaramZero[0].nome);
    } else if (jogaramUm.length === 1) {
        console.log(jogaramUm[0].nome);
    } else {
        console.log("NINGUEM");
    }

}
solucao(jogadores);







