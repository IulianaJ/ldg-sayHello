const sayHello = require('./sayHello');

describe('sayHello', () => {

test("given a name and a function that returns 0 should return Hello ${name}, nice to meet you!", () => {
    const result = sayHello("Gogu", () => {
        return 0;
    });

    expect(result).toEqual(`Hello Gogu, nice to meet you!`)
})

test("given a name and a function that returns 1 should return Welcome ${name}", () => {
    const result = sayHello("Lady", () => {
        return 1;
    });

    expect(result).toEqual(`Welcome Lady`)
})

})

