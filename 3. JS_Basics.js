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
    {no:1, naam: 'Love'},      //object1
    {no:2, naam: 'Garima'}     //object2
];

console.log(courses);

let course = courses.find(function(course){
    return course.naam === 'Love';
})

console.log(course);

//output:{no: 1, naam: 'Love'}





//isi code ko chota likhna ho toh arrow function ka use kro---
let courses = [
    {no:1, naam:'Love'},       //object1
    {no:2, naam: 'Garima'}     //object2
];

console.log(courses);

let course = courses.find( course => course.naam === 'Love'
);

console.log(course);

//output:{no: 1, naam: 'Love'}






// to empty an array---
//length of array zero krdo---
let numbers = [1,2,3,4,5];
let numbers2 = numbers;

numbers.length=0;                       //other way : numbers.splice(0,numbers.length);

console.log(numbers);
console.log(numbers2);

//output:
//[]
//[]





//to combine two arrays---
//contat()---
let first=[1,2,3];
let second=[4,5,6];

let combined = first.concat(second);

console.log(combined);

//output:
// [1, 2, 3, 4, 5, 6]





//concatination using spread operator---
let first=[1,2,3];
let second=[4,5,6];

let combined = [...first, ...second];
console.log(combined)

//output:[1, 2, 3, 4, 5, 6]




//if you want to add in between---
let first=[1,2,3];
let second=[4,5,6];

let combined = [...first,'a', ...second,'b'];
console.log(combined)

//output:[1, 2, 3, 'a', 4, 5, 6, 'b']

//copy kaise create kare---
let another = [...combined];





//ITERATING AN ARRAY---
//(1)for-of loop---
let arr = [10,20,30,40,50];

for(let value of arr){
    console.log(value);
}
/*
output:
10
20
30
40
50
*/




//(2)using for-each loop---
arr.forEach(function(number){
    console.log(number);
});
/*
output:
10
20
30
40
50
*/




//joining array---
let numbers = [10,20,30,40,50];
joined = numbers.join('+');
console.log(joined);

//output:10+20+30+40+50





//sorting arrays---
 let numbers = [40,30,10,20,50];

 numbers.sort();

 console.log(numbers);

//output: [10, 20, 30, 40, 50]





//FILTERING ARRAYS---
//maine filter lagaya array p ki mujhe srif positive values dikhao---

let numbers = [2,3,-1,-5];
let filtered = numbers.filter(function(value){
    return value >= 0;
})
console.log(filtered);

//output:[2, 3]





//MAPPING ARRAYS---
let numbers = [7,8,9,10];

let items = numbers.map(function(value){
    return 'student_no' + value;
})

console.log(items);

//output: ['student_no7', 'student_no8', 'student_no9', 'student_no10']



//MAPPING WITH OBJECTS---
let numbers = [1,2,-6,-7];

let filtered = numbers.filter(value => value >= 0);

let items = filtered.map(function(num){
    return{value: num};
})
console.log(items);

//output:
//(2) [{…}, {…}]
//0: {value: 1}
//1: {value: 2}



