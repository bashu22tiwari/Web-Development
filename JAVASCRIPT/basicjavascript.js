// console.log("Hello World");
// console.log("My name is Bahsu Tiwari");

// const array1 = [1,4,9,16,25] ;

// let newArr1 = array1.map((currVal,index,array1) => {
//     return currVal>9;
// });

// let newArr2 = array1.filter((currVal,index,array1) => {
//     return currVal>9;
// });

// console.log(array1);
// console.log(newArr1);
// console.log(newArr2);

// let arr = [16,25,64,100,125];

// let newArr = arr.forEach((currElement,index,arr) => {
//     return 'Element ${currElement} is located on Index no ${index} of the array ${arr}'
// });

// console.log(newArr);


//    let a = 22;
//    let b = 44;
//    function add(a, b) {
//       return a + b;
//    }

//    console.log("The sum of " + a + "and " + b + " = is " + add(a,b));


// let arr = [1 , 2 , 3 , 4 , 5];

// let newArr = arr.map((currVal) => {
//     return currVal*2 ;
// }).filter((currVal) => {
//     return currVal>5 ;
// });

// console.log(newArr); 

// let arr = [1,2,3,4,5];

// let sum = arr.reduce((accumulator,currVal,index,arr) => {
//     debugger;
//     return accumulator+=currVal ;
// });

// console.log(sum);

// let myName = "Bashu Tiwari";
// console.log(myName.length);


// Date And Time Object 

// const d = new Date();
// console.log(d.getDate());

// function harry(){
//     console.log('This is the best person');
// }

// const harry = () => {
//     console.log('this is the best person')
// }


// console.log(harry);

// const greet = ()=> {'Good Morning'} ;


// console.log(greet());

// let addition = function(x,y) {
//     return x + y;
//    };


// console.log(addition);
// console.log(addition(10,30));

// let arr = [1,2,3,4,5];

// var arr = new Array(6,5,4,3,2,1);

// var arr = [1,2,3,4,5,6,7,8,9,10];
// // var array = arr.splice(1,3,11,12);
// function print(element){
//     console.log(element);
// }

// arr.forEach(print);

// var student = {
//     name : "bashu",
//     rollno : 10,
//     marks : 80,
//     adress : {
//         city : "gwalior",
//         state : "MP"
//     }
// };

// console.log(student.marks);

// student.gender = "male" ;
// console.log(student);
// console.log(student['rollno']);
// delete student.rollno;

// for(var prop in student){
//     console.log(prop,student[prop]);
// };

// var arr = [1,2,3,4];
// arr[6] = 5;
// console.log(arr); 

var i=1;
function sayHello(){
    console.log("Hello");
    i++;
    if(i==6){
        clearInterval(id);
    }
}

// setTimeout(sayHello, 10000);

// setInterval(() => {
//     sayHello();
// }, 2000);

// var id = setInterval(sayHello,2000);

// Counting Timer

var timer = 20;
function timerWatch(){

    if(timer==0){
        console.log("Times Up!");
        clearInterval(id);
    }
    console.log(timer);
    timer--;
}

var id = setInterval(timerWatch,1000);


    

   