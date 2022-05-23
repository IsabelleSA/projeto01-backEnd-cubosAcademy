const numeros = [1, 1, 1];

let soma = 0;

for (let numero of numeros) {
    soma += numero;
}

let jogador = 1;

if (soma % numeros.length != 0) {
    jogador = soma % numeros.length;
} else if (soma % numeros.length == 0) {
    jogador = numeros.length;
}
console.log(jogador);









