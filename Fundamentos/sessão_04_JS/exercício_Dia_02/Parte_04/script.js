let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

#1
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

#2
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}
console.log(resultado);

#3
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(soma / numbers.length);

#4
let soma = 0;
let resultado;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

resultado = soma / numbers.length;

if (resultado > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

#5
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let element = numbers[index];
    if (element > resultado) {
        resultado = element;
    }
}
console.log(resultado);

#6

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result +=1
    }

if(resultado === 0){
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(resultado)
}

#7
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {

    if (numbers[index]< menorNumero) {
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);

#8
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}
console.log(numbers);

#9

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
}
