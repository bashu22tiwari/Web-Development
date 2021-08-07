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

// var i=1;
// function sayHello(){
//     console.log("Hello");
//     i++;
//     if(i==6){
//         clearInterval(id);
//     }
// }

// setTimeout(sayHello, 10000);

// setInterval(() => {
//     sayHello();
// }, 2000);

// var id = setInterval(sayHello,2000);

// Counting Timer

// var timer = 20;
// function timerWatch(){

//     if(timer==0){
//         console.log("Times Up!");
//         clearInterval(id);
//     }
//     console.log(timer);
//     timer--;
// }

// var id = setInterval(timerWatch,1000);



// On click Event


// console.log('Hello');

// var clickhere = document.getElementById('btn');
// clickhere.addEventListener('click',function(){
//     alert('Hello People');
// });

// console.log(clickhere);


// Other Mouse and keyboard event

// var outerdiv = document.getElementById('outer');

// outerdiv.addEventListener('mouseover',function(){
//     // outerdiv.style.backgroundColor = 'yellow';
//     console.log('Mouse Over');
// });

// outerdiv.addEventListener('mouseout',function(){
//     // outerdiv.style.backgroundColor = 'cyan';
//     console.log('Mouse Out');
// });

// var searchInput = document.getElementById('search');

// searchInput.addEventListener('keydown',function(event){
//     console.log('Key Pressed',event.keyCode);
// });

// var innerDiv = document.getElementById('inner');
// innerDiv.addEventListener('click',function(event){
//     console.log('Inner Div Clicked');
//     event.stopPropagation();
// });

// var outerdiv = document.getElementById('outer');
// outerdiv.addEventListener('click',function(){
//     console.log('Outer Div Clicked');
// });


// document.addEventListener('click',function(){
//     console.log('All Div Clicked');
// });

// var list = document.getElementById('mylist');

// console.log(list);

// var i = 10;

// function outer(){
//     var j = 20;
//     console.log(i,j);
//     function inner(){
//         var k = 30;
//         console.log(j,k);
//     }
//     return inner;
// }

// var outerCall = outer();
// outerCall();.

// console.log(this);



// function demo(){
//     console.log(this);
// }

// var obj = {
//     property1: 12 ,
//     print: function(){
//         console.log(this);
//     }
// }
    
// console.log(this);
// demo.call(obj);
// obj.print();

// var student = {
//     name: "bashu",
//     rollNo: 20,
//     marks: 85
// };

// console.log(student);

// 'use strict'

// function Student(name, rollNo, marks){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.marks = marks; 
// }

// Student.prototype.getname = function(){
//         return this.name ;
// };

// Student.prototype.gender = "Male" ;

// var student1 = new Student("abc",1,56);
// var student2 = new Student("ewf",2,90);





// console.log(student1.gender);
// console.log(student2.gender);

// class Student{
//     constructor(name, rollNo, marks){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.marks = marks;   
//     }

// 	getName(){
// 		return this.name ;
// 	}
// }

// var student1 = new Student("abc",1,56);
// var student2 = new Student("ewf",2,90);
   
// console.log(student1);
// console.log(student2);


// let Rectangle = class {
// 	constructor(height, width) {
// 	  this.height = height;
// 	  this.width = width;
// 	}
//   };
//   console.log(Rectangle.name);

//   var rect = new Rectangle(10,20);

// function validate(){
// 	var username = document.getElementById("uname");
// 	var password = document.getElementById("pass");

// 	if(username.value=="" || password.value==""){
// 		alert("No Blank Values Allowed");
// 	}
// 	else{

// 	}
// }

// var button = document.getElementById("butt");
// button.addEventListener('click',validate);


let complete = true;

let prom = new Promise(function(resolve,reject){
	if(complete){
		resolve("I am Succesful");
	}
	else{
		reject("I am failed");
	}
});

console.log(prom);

let onfulfillment = (result) => {
	console.log(result);
}

let onrejection = (error) => {
	console.log(error);
}

prom.then(onfulfillment);
prom.catch(onrejection);
  

