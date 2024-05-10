// line below is used to print on the console window---
console.log("hello world version 3");
//output: hello world version 3




//we can change the value of a variable in js unlike c,c++,java---
let lastName = 'Nagdeve'; 
console.log(lastName);

lastName = 3;
console.log(lastName);
//output: Nagdeve
//        3




//ternary operator
let age=17;
let status = (age>=18) ? 'Yes Vote' : 'can not vote';
console.log(status);
//output: can not vote





//control statements---(1) if - else if - else
let marks = 98;
if(marks>90){
    console.log("GRADE A")
}
else if(marks>80){
    console.log('GRADE B')
}
else if(marks>70){
    console.log('GRADE C')
}
else{
    console.log('GRADE D')
}
//output: GRADE A





//control statements---(2) switch-case
//if 1-->A, 2-->B, 3-->C
let num = 2;

switch(num) {
    case 1: console.log('GRADE A')
    break;

    case 2: console.log('GRADE B');
    break;

    case 3: console.log('GRADE C');
    break;

    default: console.log('GRADE D');
}
//output: GRADE B





//for loop---ex(1)
for(let i = 0; i<=5; i=i+1) {
    console.log(i);
}
//output: 
//0
//1
//2
//3
//4
//5





//for loop---ex(2)
for(let i = 0; i<=5; i=i+1) {
    console.log('GARIMA '+ i);
}
//output: 
//GARIMA 0
//GARIMA 1
//GARIMA 2
//GARIMA 3
//GARIMA 4
//GARIMA 5





//while loop---ex(1)
let x = 1;

while(x<=5) {
    console.log(x);
    x++;
}
//output:
//1
//2
//3
//4
//5





//while loop---ex(2)
let x = 1;

while(x<=5) {
  console.log('GARIMA ' + x)
  x++;
}
//output:
//1
//2
//3
//4
//5






//do-while loop---ex
let y =1;

do{
    console.log(y);
    y++;
}

while(y<=5);
//output:
//1
//2
//3
//4
//5
