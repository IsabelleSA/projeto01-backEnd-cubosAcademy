const palavra = "caPs";



/* if (palavra == palavra.toUpperCase()) {
    console.log(palavra.toLowerCase());
} else if (palavra == palavra.toLowerCase()) {
    console.log(palavra);
} else if (palavra[0] == palavra[0].toLowerCase() || palavra.substring(1, palavra.length - 1) == palavra.substring(1, palavra.length - 1).toUpperCase()) {
    console.log(palavra[0].toUpperCase() + palavra.slice(1).toLowerCase());
} else {
    console.log(palavra);
} */

const palavra1 = palavra.substring(0, 1);
const palavra2 = palavra.substring(1, palavra.length);
/* console.log(palavra1);
console.log(palavra2); */
if (palavra == palavra.toUpperCase()) {
    console.log(palavra.toLowerCase());
} else if (palavra1 == palavra1.toLowerCase() && palavra2 == palavra2.toUpperCase()) {
    console.log(palavra1.toUpperCase() + palavra2.toLowerCase());
} else {
    console.log(palavra);
}




/* const palavra = input;
    if (palavra == palavra.toUpperCase()) {
        console.log(palavra.toLowerCase());
    } else if (palavra[0] == palavra[0].toLowerCase() && palavra[1] == palavra[1].toUpperCase()) {
        console.log(palavra[0].toUpperCase() + palavra.slice(1).toLowerCase());
    } else {
        console.log(palavra);
    } */