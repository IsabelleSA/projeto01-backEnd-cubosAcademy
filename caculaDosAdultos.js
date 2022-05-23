const lista = [12, 14, 13];

const idadesPermitidas = [];


for (let idade of lista) {
    if (idade >= 18) {
        idadesPermitidas.push(idade);
    }
}
let menor = idadesPermitidas[0];
for (i = 0; i < idadesPermitidas.length; i++) {
    if (idadesPermitidas[i] < menor) {
        menor = idadesPermitidas[i];
    }
}
if (menor) {
    console.log(menor);
} else {
    console.log("CREÇA E APAREÇA");
}






//for (let idade of lista) {
   // if (idade >= 18) {
       // idadesPermitidas.push(idade);
      //  menorEntreAdultos = Math.min(...idadesPermitidas);
    //}

//}

//console.log(menorEntreAdultos);


