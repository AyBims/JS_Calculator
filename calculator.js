var a, b, c, add, sub, mul, div;
operator = parseInt(prompt("Enter your operator: add for addition, sub for subtraction, mul for multiplication or div for division"));
a = parseInt(prompt("Enter First number"));
b = parseInt(prompt("Enter Second number"));
if (operator === "add") {
	add = a + b;
	console.log("Addition of both numbers gives " +add);
} else if (operator === "sub") {
	sub = a - b;
	console.log("Subtraction of both numbers gives " +sub);
} else if (operator === "mul") {
	mul = a * b;
	console.log("Multiplication of both numbers gives ";+mul);
} else if (operator === "div") {
	div = a / b;
	console.log("Division of both numbers gives " +div)
} else {
	console.log("Not a valid operator"); }
