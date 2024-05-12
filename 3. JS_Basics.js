//IN-BUILT OBJECTS---

//Math Object---(1)

Math.random()

//output: 0.6029839706293794

Math.round(3.8)
//output: 4

Math.min(1,2,3)
//output: 1

Math.max(1,2,3)
//output: 3





//String Object---(2)

let lastName = 'Nagdeve';                             //string(PRIMITIVE)---

let firstName = new String('Garima');                 //string(OBJECT)---

//output:
typeof lastName;
//'string'
typeof fastName;
//'object'




//HOW TO USE SPLIT---
let message = 'This is my first message';
let words = message.split(' ');                       //we want to split the message by spaces---
console.log(words);

/*
output:
(5) ['This', 'is', 'my', 'first', 'message']
0: "This"
1: "is"
2: "my"
3: "first"
4: "message"
length: 5
*/





//TEMPLATE LITERAL---jo jaisa likha hua h usko waisa hi show krne k liye---
//we gotta use backticks for this---
let message = 
`This is
my first
message`;
console.log(message);

/*
output:
This is
my first
message
*/





//DATE and TIME(INBUILT OBJECT)
let date = new Date();
console.log(date);
//output:Mon May 13 2024 00:22:04 GMT+0530 (India Standard Time)


//or
let date2 = new Date('June 20 1998 07:15');
console.log(date2);
//output:Sat Jun 20 1998 07:15:00 GMT+0530 (India Standard Time)


//now how to use setter on this---
let date2 = new Date('June 20 1998 07:15');
console.log(date2);

date2.setFullYear(1947);
console.log(date2)
//output:Fri Jun 20 1947 07:15:00 GMT+0530 (India Standard Time)




//ARRAYS---

//insertion
let numbers= [1,3,6,7,5];
console.log(numbers);

//(1)at end---
numbers.push(9)
//output:[1, 3, 6, 7, 5, 9]

//(2)at front---
numbers.unshift(8)
//output:[8, 1, 3, 6, 7, 5, 9]

//(3)in middle---
numbers.splice(2,0,'a','b','c','d');
//output:[8, 1, 'a', 'b', 'c', 'd', 3, 6, 7, 5, 9]





//we want to check if a number exist in an array---

//(1)using indexOf---
if(numbers.indexOf(9) != -1);
console.log('present')
//output:present

//(2)using includes---
//and this is the best practice ---it gives output as true or false---
console.log(numbers.includes(7));
//output:true





//on refrences---
//CALLBACK FUNCTION---
let courses = [
    {no:1, naam:'Love'},       //object1
    {no:2, naam: 'Garima'}     //object2
];

console.log(courses);

let course = courses.find(function(course){
    return course.naam === 'Love'
})

console.log(course);

//output:{no: 1, naam: 'Love'}


