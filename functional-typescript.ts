var add: (a: number) => (b: number) => number;
add = (a: number) => (b: number) => a + b;






/**
 * Testing
 */
console.assert(add(1)(1) == 2);

