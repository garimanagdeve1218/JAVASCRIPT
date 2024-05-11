// object create
let rectangle = {
    length: 1,
    breadth: 2
};

console.log(rectangle);
//output:{length: 1, breadth: 2}





//making a method of object
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){
        console.log('draw');
    }

};
//output:
//to print the whole function---
//rectangle.draw
//ƒ (){
//      console.log('draw');
//    }


//to call the function---
//rectangle.draw()
//draw


//to access the length---
//rectangle.length
//1


//to access the breadth---
//rectangle.breadth
//2






//if we want to create a function that creates an object---

//factory function---
//this function ceates an object and the returns that object
function createRectangle(){
    let rectangle = {
        length: 1,
        breadth: 2,
    
        draw: function(){
            console.log('draw');
        }
    
    };

    return rectangle;

}

//a simpler way to write the above code is---
function createRectangle(){
    return rectangle = {
    
        length: 1,
        breadth: 2,
    
        draw: function(){
            console.log('draw');
        }
    
    };


//or one more way to access/invoke the function draw is writing rectangle.draw() ---
function createRectangle(){
    let rectangle = {
        length: 1,
        breadth: 2,
    
        draw(){
            console.log('draw');
        }
    };
}

rectangle.draw()





    
//factory function
function createRectangle(){
    return rectangle = {
        length: 1,
        breadth: 2,
    
        draw(){
            console.log('draw');
        }
    };
}

let rectangleObj1 = createRectangle();         //calling that function and storing the data of that function in an object whose name is rectangleObj1






//now what if i want to input the length and breadth of the rectangle thaqt is being created by that function---
//using factory function only---
function createRectangle(len,bre){
    return rectangle = {
        length: len,
        breadth: bre,
    
        draw(){
            console.log('drawing rectangle');
        }
    };
}

let rectangleObj1 = createRectangle(5,4);
let rectangleObj3 = createRectangle(1,2);
let rectangleObj2 = createRectangle(7,8);
let rectangle3 = createRectangle(3.4);

/*output:
rectangle3
{length: 3, breadth: 4, draw: ƒ}
rectangleObj1
{length: 5, breadth: 4, draw: ƒ}
rectangleObj2
{length: 7, breadth: 8, draw: ƒ}
rectangleObj3
{length: 1, breadth: 2, draw: ƒ}*/






//constructor function---
    
//constructor function for creating a function that is creating a rectangle---
function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('drawing');
    }
}
//object creation using constructor function---
let rectangleObject = new Rectangle();

/*
output:
rectangleObject
Rectangle {length: 1, breadth: 2, draw: ƒ}
rectangleObject.draw()
 drawing
*/



    

//when we take inputs for length and breadth---
function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log('drawing');
    }
}

//object creation using constructor function---
let rectangleObject = new Rectangle(4,6);
/*
output:
rectangleObject
Rectangle {length: 4, breadth: 6, draw: ƒ}
*/






//dynamic nature of objects---
    
//to add a new property to object---
function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log('drawing');
    }
}

let rectangleObject = new Rectangle(4,6);

rectangleObject.color = 'yellow';
console.log(rectangleObject);

/*
output:
Rectangle {length: 4, breadth: 6, color: 'yellow', draw: ƒ}
*/

//to delete a property from an object---
function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log('drawing');
    }
}

let rectangleObject = new Rectangle(4,6);

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

/*
output:
Rectangle {length: 4, breadth: 6, draw: ƒ}
*/





    
//constructor property---
//on console---
rectangleObject.constructor

/*
output:
ƒ Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log('drawing');
    }
}
*/







//primitive
let a = 10;
let b = a;

a++;
console.log(a);
console.log(b);

/*
output:
11
10
*/




//reference
let a = { value: 10};
let b = a;

a.value++;

console.log(a.value);
console.log(b.value);

/* 
output:
11
11
*/





//jab primitive pass krte h kisi function me toh uski copy banti hai alag se---
let a = 10;

function increment(a){
    a++;
}

increment(a);

console.log(a);
/*
output:
10
*/


