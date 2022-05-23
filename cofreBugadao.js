const input = require("fs").readFileSync("stdin2", "utf-8");

const linhas = input.trim().split("\n");
const senhaCorreta = linhas[0];
const senhaDigitada = linhas[1];

const senha = senhaDigitada.split('');
const letrasOk = [];
let i = 0;

for (let letra of senhaDigitada) {
    let letraAtual = senhaCorreta[i];
    if (letra === letraAtual) {
        letrasOk.push(letra);
        i++;
    }

}
const senhaAjustada = letrasOk.join('');
if (senhaAjustada === senhaCorreta) {
    console.log('SIM');
} else {
    console.log('NAO');
}

