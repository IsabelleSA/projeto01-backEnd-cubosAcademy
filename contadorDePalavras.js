const texto = "Cuidado, pois usuarios as vezes deixam    espacos     vazios no fim do texto sem querer    ";
const novoTexto = texto.trim().split(" ");
let fraseFinal = [];

for (let palavra of novoTexto) {
    if (palavra) {
        fraseFinal.push(palavra);
    }
}

console.log(fraseFinal.length);


