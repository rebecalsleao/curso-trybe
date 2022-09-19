// Exercício 1

const factorial = (number) => {
    let result = 1;
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
    return result;
};
const print = factorial(number);
console.log(`Esse é o fatorial ${print}`);

// Exercício 2

const longestWord = (text) => {
    const wordArray = text.split(" ");
    let maxLength = 0;
    let result = "";

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
};

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));

//   Exercício 3
