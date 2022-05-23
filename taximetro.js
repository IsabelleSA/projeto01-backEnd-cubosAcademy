const tempo = 50;
const distancia = 3;



if (distancia <= 10) {
    precoDaViagemDistancia = (70 * distancia);
} else {
    descontoDistancia = (distancia - 10) * 50;
    precoDaViagemDistancia = (10 * 70) + descontoDistancia;
}
if (tempo <= 20) {
    precoDaViagemTempo = (50 * tempo);
} else {
    descontoTempo = (tempo - 20) * 30;
    precoDaViagemTempo = (50 * 20) + descontoTempo;
}
precoFinal = precoDaViagemDistancia + precoDaViagemTempo;
console.log(precoFinal.toFixed());

