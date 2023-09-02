// 01 Variable Declararation
let myName; 
myName = "Shreyash";

// 02 Data types
/* > Number
    > Null
    > Boolen
    > Object
    > String
    */

// 03 Reverse String
function reverseString(str) {
    let rev = "";
    let len = str.length-1;
    for (let i = len; i >= 0; i--) {
        rev += str[i];
        
    }
    return rev;
}
// console.log(reverseString(myName));


// 04 Conditional Statement
function conditionlStatement(num) {
    if (num%2 == 0) {
        return "Even";
    }else{
        return "Odd";
    }
}
// console.log(conditionlStatement(36));

// 05 Create An Arrays
let fruits = ["Watermelon", "Orange", "Banana"];

// 06 ForLoop 
function forLoop() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        
    }
}
// console.log(forLoop())

// 07 Calculate Area
function calculateArea(len , bre) {
    return len * bre;
}

// console.log("Area = ", calculateArea(20,3));

// 08 Create an Object
const person = {
    name : "Shreyash",
    age : 21,
    city : "Kalamboli"
}