// Example for Types (string, number, and boolean)

const greeting = (myName: string, myAge: number, showGreeting: boolean) => {
  if (showGreeting) {
    return `Hello! My name is ${myName}, ${myAge} years old`;
  }
};

const myName = "AA";
const myAge = 28;
const showGreeting = true;

console.log(
  "Example of Types (string, number, and boolean)",
  greeting(myName, myAge, showGreeting)
);

// Example of Object Type

const person: { name: string; age: number } = {
  name: "Alex Alfred V. Villanueva",
  age: 28,
};

console.log("Example of Object Types", person.name, person.age);

// Example of Array Types
let names: string[];
names = ["AA", "Alex", "Alfred"];

console.log("Example of Array Type", names);

// Example of Tuple
let tupleDatas: [string, number];
tupleDatas = ["tuple data", 0];

console.log("Example of Tuple", tupleDatas);

// Example of enum

enum Role {
  ADMIN = "Admin",
  AUTHOR = "Author",
}

console.log("Example of enum", Role.ADMIN);

// Example of Any Type

let anySample: any;
anySample = "Any";

console.log("Example of Any Type", anySample);

// Example of Union Type

let unionSample: string | number;
unionSample = "Union";

console.log("Example of Union Type", anySample);

// Example of Literal Type;

const combine = (
  input1: string | number,
  input2: string | number,
  input3: "as-string" | "as-number"
) => {
  if (input3 === "as-string") {
    return input1.toString() + input2.toString();
  } else {
    return +input1 + +input2;
  }
};

console.log(
  "Example of Literal Type (as-string)",
  combine("Alex", "Alfred", "as-string")
);

console.log("Example of Literal Type (as-number)", combine(2, 8, "as-number"));

// Example of Custom Type

type CustomType = string | number;

let customTypeExample: CustomType;

customTypeExample = "Alex";

console.log("Example of Custom Type", customTypeExample);

// Example of Void Type

const voidFunction = (name: string): void => {
  console.log("Example of Void Type", name);
};

voidFunction("Alex");

// Example of Function Type

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

let functionTypeExample: (number1: number, number2: number) => number;

functionTypeExample = add;

console.log("Example of Function Type", functionTypeExample(1, 2));

// Function Type & Callback

const callbackFunctionExample = (
  n1: number,
  n2: number,
  cb: (num: number) => void
) => {
  const result = n1 + n2;
  cb(result);
};

callbackFunctionExample(10, 20, (result) => {
  console.log("Function Type & Callback example", result);
});

// Unknown Type
let unknownExample: unknown;
unknownExample = "AA";

console.log("Unknown Example", unknownExample);

// Never Type
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError("An error occured!", 500);
