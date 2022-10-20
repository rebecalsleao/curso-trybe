const fruitSalad = (fruit, additional) => {
    // basta atribuirmos os dois arrays a uma constante usando o spread operator e retorná-lo ao final da função.
    const fruitSaladaWithAdditional = [...fruit, ...additional];
    return fruitSaladaWithAdditional;
};

// Faça uma lista com as suas frutas favoritas
const specialFruit = ["banana", "maçã", "pera"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["granola", "aveia", "mel"];

console.log(fruitSalad(specialFruit, additionalItens));

console.log();
