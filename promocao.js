const precos = [200, 150, 50, 100];
let soma = 0;

for (let preco of precos) {
    soma += preco;
}
if (precos.length >= 3) {
    let precoMenor = precos[0];
    for (let item of precos) {
        if (item < precoMenor) {
            precoMenor = item;


        }
    }
    console.log(soma - precoMenor / 2);
} else {
    console.log(soma);
}