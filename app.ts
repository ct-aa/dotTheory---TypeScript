// Arrow function that accepts a default parameter
const addWithDefaultParameter = (num1: number, num2 = 1) => {
  return num1 + num2;
};

console.log("Example using default parameter", addWithDefaultParameter(2, 8));

// Arrow function that accepts a rest parameter

const addWithRestParameter = (num1: number, ...numbers: number[]) => {
  const numbersTotal = numbers.reduce((total, num) => {
    return total + num;
  }, 0);

  return num1 + numbersTotal;
};

console.log("Example using Rest Parameter", addWithRestParameter(28, 1, 2, 3));

// Arrow function that returns destructured array values.

const returnArrayFn = (num1: number, num2: number) => {
  const sampleArray = [num1, num2];

  const [number1, number2] = sampleArray;

  console.log(
    "Example of destructured values in an array =>",
    `first value = ${number1},`,
    `second value = ${number2}`
  );
};

returnArrayFn(2, 8);

// Arrow function that returns destructured object values.

const returnObjectFn = (name: string, age: number) => {
  const sampleObject = { userName: name, userAge: age };

  const { userName, userAge } = sampleObject;

  console.log(
    "Example of destructured values in an object =>",
    `first value = ${userName},`,
    `second value = ${userAge}`
  );
};

returnObjectFn("AA", 28);
