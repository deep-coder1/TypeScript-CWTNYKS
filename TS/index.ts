let a1: number = 1;

a1 = 10;

function add1(a: number, b: number): number {
  return a + b; // type checking
}

const y = add1(1, 2);

console.log("Add two no: ", y);
