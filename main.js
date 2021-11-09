//printing
console.log("hello")

var my_name = "Anu"
console.log(my_name)

//integer
var some_num = 31
console.log(some_num)

//float
var some_float = 3.14
console.log(some_float)

//arrays..like python list
var some_array = [1,2,3,4]
console.log(some_array)
console.log(some_array[2])

//Object variable...like a python dictionary
var some_object = {'test': 'please test me'}
console.log(some_object['test'])
console.log(some_object.test)
my_key = "test"
console.log(some_object[my_key])

//declare vars
var some_random_var
console.log(some_random_var)
some_random_var = "Christina"
console.log(some_random_var)

//JS Hoisting
console.log(madeUpName) //it gets declared at the beggining, assignment of values happens later
var madeUpName = "Steve"
console.log(madeUpName) 

test_hoist()
function test_hoist()
{
    console.log("hoisting")
}

//We use CAMEL case in JS
var myVarName = "Anu"

//Let and Var
var i = 5
let a = i
console.log(a)
a = 900
console.log(a)

//const
const super_hero = "ironman"
console.log(super_hero)

//Math in JS
let sum = 5 + 5;
console.log(sum)//10
sum+=5
console.log(sum)//15
sum+="hi"
console.log(sum)//15hi

//subraction
let diff = 5.5
console.log(diff)
diff -= 5
console.log(diff)

/*
Same with multiplication and division
*/

//typeof
let div = 5/5
console.log(typeof div) //number

//exp
let square = 5**2
console.log(square) //25
square **= 2
console.log(square) //625

//Floor division
//in python we did 5//2 = 2
let floor = Math.floor(5/2)
console.log(floor) //2

//Ceiling -- rounding
let ceil = Math.ceil(5/2)
console.log(ceil) //3

//implicit typecasting
let stuff = 3.14 + '4'
console.log(stuff) //3.144

//int() float() str() in python
let stuff1 = 3.14 + parseInt(4) // 7.14 , parseInt() similar to int() in python
console.log(stuff1) 

let stuff2 = 3.14.toString() + '4'  //tostring() works af str() in python
console.log(stuff2) //3.144

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){

    for(let i=0; i<dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log("Matched " + dog_names[i])
        }
        else{
            console.log("No Matches")
        }
    }
    
}

