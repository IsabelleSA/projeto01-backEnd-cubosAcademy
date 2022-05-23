const lista = [2, 3, 4, 30, 20];

let soma = 0;

for (let numero of lista) {
    somaItensLista = soma += numero;
    media = somaItensLista / lista.length;
}
console.log(media);