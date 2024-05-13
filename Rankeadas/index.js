//CALCULADORA DE PARTIDAS RANKEADAS
let vitorias = 0;
let derrotas = 0;


function calcularRank (vitorias,derrotas) {
    let saldoVitorias;
    let rank;
    saldoVitorias = vitorias - derrotas;

    if(saldoVitorias<10){
        rank = "Ferro"
    }
    else if (saldoVitorias>10 && saldoVitorias<=20){
        rank = "Bronze"
    }
    else if (saldoVitorias>20 && saldoVitorias<=50){
        rank = "Prata"
    }
    else if (saldoVitorias>50 && saldoVitorias<=80){
        rank = "Ouro"
    }
    else if (saldoVitorias>80 && saldoVitorias<=90){
        rank = "Diamante"
    }
    else if(saldoVitorias>90 && saldoVitorias<=100){
        rank = "Lendário"
    }
    else {
        rank = "Imortal"
    }

    return console.log ('O Herói tem de saldo de ' +saldoVitorias+ ' e está no nível de ' + rank);

}

calcularRank(78,5)