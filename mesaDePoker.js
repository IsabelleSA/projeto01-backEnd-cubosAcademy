const minimo = 1;
const maximo = 3;
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosPermitidos = [];

for (let valor of valores) {
    if (valor >= minimo && valor <= maximo) {
        numerosPermitidos.push(valor);
    }
}
console.log(numerosPermitidos);