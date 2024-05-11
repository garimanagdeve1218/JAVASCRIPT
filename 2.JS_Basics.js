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





