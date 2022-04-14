
/** 
/**The exercises below are to be done during and following your viewing of the resources. 
 * Please push your completed project to a repository on Github.  Provide the link to your js file in your repo.*/




/**VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. 
Example output: “The difference between 6 and 2 is 4” */

var num1 = 4;
var num2 = 2;
console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);



/**EASY: Create two variables and assign a person’s name to each. Console log a statement that says which 
name is shorter or longer, and by how many characters. 
Example output: “The name Thomas is longer than John by 2 characters” */

var person1 = "Ted";
var person2 = "Trinity";
var difference;

if (person1.length == person2.length){
    console.log(`The name ${person1} and ${person2} are equal.`)        //if word length is the same
} 
else if (person1.length > person2.length){                             //if first name is longer than second
    difference = person1.length - person2.length
    //Check if difference is greater that 1 to change characters to character
    if (difference == 1){                                                                   
        console.log(`The name ${person1} is longer than ${person2} by ${difference} character.`)
    } else {
        console.log(`The name ${person1} is longer than ${person2} by ${difference} characters.`)
    }
} 
else {
    difference = person2.length - person1.length                        //if second name is longer that first
    //Check if difference is greater that 1 to change characters to character
    if (difference == 1){
        console.log(`The name ${person2} is longer than ${person1} by ${difference} character.`)
    } else {
        console.log(`The name ${person2} is longer than ${person1} by ${difference} characters.`)
    }
};


/**MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), 
or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally. */

var userInput = prompt("Go on, say something:  ");

if (userInput == userInput.toLowerCase()) {
    console.log("User is whispering")
} else if (userInput == userInput.toUpperCase()) {
    console.log("User is shouting")
} else {
    console.log("User is talking normally")
};


/**HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() 
that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers. */

function add(num1, num2) {          //function add two numbers together
    return num1 + num2
};

function subtract(num1, num2) {         //function subtracts 2 numbers
    return num1 - num2
};


function divide(num1, num2) {           //function divides 2 numbers
    return num1/num2 
};

function multiply(num1, num2) {         //function multiplies 2 numbers
    return num1 * num2 
};

function errorMsg() {                   //error message if operator is invalid
    return "Enter valid operator"
};


/**VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7" */

//Get numbers from user
var entry1 = prompt("Enter a number: ");
entry1 = Number(entry1);                           //changes string to number

var operator = prompt("Enter an operator(either +, -, * or /): ");

var entry2 = prompt("Enter a second numer: ");
entry2 = Number(entry2)   ;                        //changes string to number

var result;

//Check operator and calculate result
if (operator === "+") {
    result = add(entry1, entry2)

} else if (operator === "-") {
    result = subtract(entry1, entry2)

} else if (operator === "*") {
    result = multiply(entry1, entry2)

} else if (operator === "/") {
    result = divide(entry1, entry2)

}   else {
    console.log(errorMsg())
};

//print results
console.log(`${entry1} ${operator} ${entry2} = ${result}`);