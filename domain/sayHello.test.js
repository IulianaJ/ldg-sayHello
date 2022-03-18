const sayHello = require('./sayHello');

describe('sayHello', () => {
 test("given a name, say hello name, nice to meet you!", () => {
     const result = sayHello("Gogu Ray");

     expect(result).toBe(`Hello Gogu Ray, nice to meet you!`);
 })
})
