//functions

let num = 7
function addNums(){
    let num1 = 10;
    let num2 = 20;
    let num = 30
    return num1+num2
};

function addNums2(num1,num2){
    return num1+num2
}

const addNums3 = function(num1,num2){
    return num1 + num3
}

//Not allowed as it is a constant function
/*function addNums3(num1,num2){
    return num1+num2
}*/


//ES6 we have Arrow functions..This refers to global this
//Arrow function
let multipleNums = () => {
    let num1 = 4
    let num2 = 5
    return num1 * num2
}
console.log(multipleNums())

//if only one line then it will return that line
let multipleNums2 = (num1, num2) => num1 * num2
console.log(multipleNums2(10,20))

//if you have only 1 parameter then no need to 
let func1 = num => num*2
console.log(func1(4))

let multipleNums3 = (num1, num2) => {
    return num1 * num2
}


function test()
{
    5*2
}
console.log(test())//undefined

console.log(addNums())
console.log(num) //30
//console.log(num1)//error
console.log(addNums2(5,10))


//cal avg of 2 numbers
function cal_avg(num1, num2){
    return (num1+num2)/2
}
console.log("Avg:" + cal_avg(10,20))

//using arrow function calculate sum of squares of numbers
let sum_of_squares = (num1, num2) => {
    return (num1**2 ) + (num2**2)
}
console.log("Sum of squares:" + sum_of_squares(10,20))

//OR
let sum_of_squares2 = (num1, num2) => (num1**2 ) + (num2**2)
console.log("Sum of squares2:" + sum_of_squares2(10,20))

//Self invoking functions
console.log(function(name){
    return name 
}('Chris'))

//Flow Control
// and is &&
// or is ||
function determineAge(age){
    if (age < 18){
        return "Minor"
    }
    else if (age >= 18 && age<= 65 ){
        return "Adult"
    }
    else{
        return "ELderly"
    }
}
console.log(determineAge(68))

//ternary Operator
var age = 20
var age_group = age > 20? "Over 20": "Under 20"
console.log(age_group)

function dAge(age){
    return age < 18 ? "Minor": age  >=18 && age <=65? "Adult": "Elderly"
}
console.log(dAge(89))

//increment operation
let z = 1
z++
console.log(z)

//Loops
//Count by 1
function countByOne(){
    for(let i=0; i<10; i++){
        console.log(i)
    }
}
countByOne()

function countDownByOne(){
    for(let i=10; i>0; i-=2){
        console.log(i)
    }
}
countDownByOne()

//List
let my_list = ["a", "b", "c", "d", "e"]
console.log(my_list.length)

for(let i=0; i< my_list.length; i++){
    console.log(my_list[i])
}

//Python for name in names
//Get access to object
//of gives value
//in gives key/index in JS
for (let char of my_list){
    console.log(char)
}

//loop through an array inline
my_list.forEach( (char) => console.log(char))

//.map .filter .reduce
//return false for all that doesn't start with T/t
names = ["pari", "tate", "toan", "eduardo", "mike", "mccall", "tim"]
let t_names = names.map(
    (name) => {
        if (name[0] == 'T' || name[0] == "t"){
            return name
        }
        else{
            return false
        }
    }
)
console.log(t_names)

//Uppercase
console.log("abc".toUpperCase())
