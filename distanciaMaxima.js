const input = require("fs").readFileSync("stdin", "utf-8");

const linhas = input.trim().split("\n");

const n = parseFloat(linhas[0]);

const coordenadas = [];

for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseFloat(coord[0]),
        y: parseFloat(coord[1])
    })
}
let distancia = 0;

for (let i = 0; i < coordenadas.length; i++) {
    for (let j = 1; j < coordenadas.length; j++) {
        let novaDistancia = Math.sqrt((((coordenadas[j].x) - (coordenadas[i].x)) ** 2) + (((coordenadas[j].y) - (coordenadas[i].y)) ** 2));
        if (distancia < novaDistancia) {
            distancia = novaDistancia;
        }
    }
}
console.log(distancia);




