//alert("Open console :)");

let num = 266219;
console.log("The number in which we multiply all the digits: " + num);
num = num.toString();
let result = 1;
let i = 0;
while (i !== num.length) {
    result *= num[i];
    console.log(i+1 + ") " + result / num[i] + " * " + num[i] + " = " + result);
    i++;
}
console.log("The result is " + result);

//exponentiation
let exp = result ** 3;
console.log("Raise the number " + result + " to the " + " 3rd power " + exp);
exp = exp.toString();
i = 0;
console.log("First two digits: " + exp[i] + exp[i+1]);

