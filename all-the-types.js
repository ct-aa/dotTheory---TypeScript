// Example for Types (string, number, and boolean)
var greeting = function (myName, myAge, showGreeting) {
    if (showGreeting) {
        return "Hello! My name is ".concat(myName, ", ").concat(myAge, " years old");
    }
};
var myName = "AA";
var myAge = 28;
var showGreeting = true;
console.log("Example of Types (string, number, and boolean)", greeting(myName, myAge, showGreeting));
// Example of Object Type
var person = {
    name: "Alex Alfred V. Villanueva",
    age: 28,
};
console.log("Example of Object Types", person.name, person.age);
// Example of Array Types
var names;
names = ["AA", "Alex", "Alfred"];
console.log("Example of Array Type", names);
// Example of Tuple
var tupleDatas;
tupleDatas = ["tuple data", 0];
console.log("Example of Tuple", tupleDatas);
// Example of enum
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
console.log("Example of enum", Role.ADMIN);
// Example of Any Type
var anySample;
anySample = "Any";
console.log("Example of Any Type", anySample);
// Example of Union Type
var unionSample;
unionSample = "Union";
console.log("Example of Union Type", anySample);
// Example of Literal Type;
var combine = function (input1, input2, input3) {
    if (input3 === "as-string") {
        return input1.toString() + input2.toString();
    }
    else {
        return +input1 + +input2;
    }
};
console.log("Example of Literal Type (as-string)", combine("Alex", "Alfred", "as-string"));
console.log("Example of Literal Type (as-number)", combine(2, 8, "as-number"));
var customTypeExample;
customTypeExample = "Alex";
console.log("Example of Custom Type", customTypeExample);
// Example of Void Type
var voidFunction = function (name) {
    console.log("Example of Void Type", name);
};
voidFunction("Alex");
// Example of Function Type
var add = function (num1, num2) {
    return num1 + num2;
};
var functionTypeExample;
functionTypeExample = add;
console.log("Example of Function Type", functionTypeExample(1, 2));
// Function Type & Callback
var callbackFunctionExample = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
callbackFunctionExample(10, 20, function (result) {
    console.log("Function Type & Callback example", result);
});
// Unknown Type
var unknownExample;
unknownExample = "AA";
console.log("Unknown Example", unknownExample);
// Never Type
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError("An error occured!", 500);
