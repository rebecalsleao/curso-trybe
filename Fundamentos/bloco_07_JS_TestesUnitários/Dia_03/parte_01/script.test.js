// 1
const { sum, myRemove, myFizzBuzz } = require("./script.js");

it("retorna resultado da soma", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
});

it("deve está dando erro", () => {
    expect(() => sum(4, "5")).toThrow("parameters must be numbers");
});

// 2

it("verifica se remove o item do array com sucesso", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

it("Não remove um elemento inexistente do array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

// 3

it("Verificar número divisível por 3 e 5", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
});

it("Verificar número divisível por 3", () => {
    expect(myFizzBuzz(9)).toBe("fizz");
});

it("Verificar número divisível por 5", () => {
    expect(myFizzBuzz(25)).toBe("buzz");
});

it("Verificar número que não divisível por 3 e 5", () => {
    expect(myFizzBuzz(31)).toBe(31);
});

it("Verificar parâmetro não numérico", () => {
    expect(myFizzBuzz("a")).toBe(false);
});
