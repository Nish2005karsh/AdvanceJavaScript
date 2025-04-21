// function tester(para1, para2){
//     return para1 + ""+ para2;
// }
// const arg1="argument 1";

// const arg2="argument2";
// console.log(tester(arg1,arg2));
// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }
// let num1=parseInt(prompt("Enter first number"));
// let num2=parseInt(prompt("Enter second number"));
// addTwoNum(num1,num2);
// let arr=[]
// arr.push("arrangement");
// console.log(arr);
// function addTwoNum(num1=5,num2=10){
//     console.log(num1+num2);
// }
// addTwoNum()
// addTwoNum(1,2,3,4)
// Arrow function passing of functions inside functions instead of parameters (param1,param2)=>body of function
// let doingstuff=x=>console.log(x);
// doingstuff("doingstiff")
// let addTwoNum=(num1,num2)=>console.log(num1+num2);
// addTwoNum(5,10);
// const arr=["a","b","c"];
// arr.forEach(e=>console.log(e));
// const arr=[1,2,3];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// spread operator and rest op
// let spread=['so',"me","thing"];
// let message=["Javascript","sbakbdkak"];
// console.log(...spread,...message);
// // ... removes square bracket
// console.log(...spread);
// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// };
// let arr=[1,2];
// addTwoNum(...arr);
// rest is used in funtion definition ehie spread is  used in invoke function
// function addFourNum(num1,num2,num3,num4){
//     console.log(num1+num2+num3+num4);

// }
// let arr1=[1,2];
// let arr2=[3,4];
// addFourNum(...arr1,...arr2);
// rest parameter
// function addFourNum(...num){
//     console.log(num);    
// }
// addFourNum(1,2,3,4,5,6,7,8);
// function someFunction(para1,...para2){
//     console.log(para1,para2);
// }
// someFunction("argument1","argument2","argument3","argument4");
// Returning function value
// let addTwoNum=(num1,num2)=>(num1+num2);
// let resultarr=[];
// for (let i=0; i<10;i++){
//     let result=addTwoNum(i,2*i);
//     resultarr.push(result);
// }
// console.log(resultarr);
// let addTwoNum=(num1,num2)=>(num1+num2);
// let result=addTwoNum(12,15);
// console.log(result);
// Node js does does not have the dom fuctuinslity
// Variable scope in function let and const are block scoped and var is function scoped or global scoped 
// local variables
// function testAvailability(x){
//     console.log("Inside testAvailability",x);
//     // local to function
// }
// testAvailability("Hi");
// console.log("Outside testAvailability",x);
// x is outside the function
// function testAvailability(){
//     let y="Local variable";
//     console.log("Inside testAvailability",y);
// }
// testAvailability();
// console.log("Outside testAvailability",y);
// function testAvailability(){
//     let y="Il return";
//     console.log("Available here",y);
//     return y;
// }
// let z=testAvailability();
// console.log("Available here",z);
// console.log("Available here",y);
// function doingstuff(){
//     if(true){
//         var x="local";      
//     }
//     console.log(x);
// }
// doingstuff();
// function doingstuff(){
//     if(true){
//         var x="local";      
//     }
//     console.log(x);
// }
// doingstuff()
// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";      
//     }
    
// }
// doingstuff();
// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";      
//     }
    
// }
// doingstuff();
// use let and const for local declaration
// var x=20;
// function doingstuff(x){
//     let x=10;
//     console.log(x)
// }
// console.log(doingstuff(20))
// let x="global";
// function doingstuff(){
//     let x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);
// Immediately invoked function expression(IIFE)
// (function(){
//     console.log("I am an IIFE function");
//     console.log("Hello world");
    
// })();
// You need not to store in a varible
// (()=>{
//     console.log("I am an IIFE function");
//     console.log("Hello world");
// })();
// ()=>invokes the function
// Recurrsive functions
// function getRecurrsive(nr){
//     console.log(nr);
//     getRecurrsive(--nr);
// }
// getRecurrsive(3);
// innfinte recurrsion
// function factorialOfNumber(num){
//     if(num==0 || num==1){
//         return 1;
//     }
//     else{
//         return num*factorialOfNumber(num-1);
//     }
// }
// console.log(factorialOfNumber(5));
// function getRecurssive(nr){
    
//     if(nr>0){
//         getRecurssive(--nr);
//         // console.log(nr);
//     }console.log(nr);
// }
// getRecurssive(5);
// function logRecurrsive(nr){
//     console.log("Started function",nr);
//     if(nr>0){
//         logRecurrsive(nr-1);
//     }
//     else{
//         console.log("Recursion ended")
//     }
//     console.log("Function ended",nr);
// }
// logRecurrsive(3);
// Recurrsive function is worsse as compared to the iteratve function becaause it calls again from stack and occupies more mempry as  compared to the ioterattive function
// Nested function
// function doOuterFunctinoStuff(){
//     console.log("I am outer function");
//     doInnerFunctionStuff();
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access the outer variable",x);
//     }


// }
// doOuterFunctinoStuff(3);
// Anonymous funcitons only have a name when they are assigned to a variable ad can only be accessed once
// let functionvariable=function(){
//     console.log("I am an anonymous function");
// }   
// functionvariable();
// Callback function is passed as an argument
// function callbackFunction(){
//     console.log("I am a callback function");
// }
// function doSomething(callback){
//     console.log("I am doing something");
//     callback();
// }
// let functionvariable=function(){
//     console.log("Not to secret though");

// }
// Synchronoyus=blocking code
// setTimeout() and setInterval() in milliseconds
// let youGotThis=function(){
//     console.log("You got this");
// }
// setInterval(youGotThis,2000);
// let val=10
// function tester(val){
//     val+=10;
//     if(val<100){
//          return tester(val);
//     }
//     return val;
// }
// console.log(tester(val));
// console.log(val);
// let testfunction=function(){
//     console.log("I am a test function");
// }();
// (function(){
//     console.log("I am a test function");
// }
// )();
// let testfunction=function(){
//     console.log("I am a test function"); 
// }
// function HelloWorld(){
//     console.log("Hello world");
// }
// setTimeout(HelloWorld,2000);
let test2=(num)=>num+5;
console.log(test2(5));
var addFive1=function addFive1(num){
    return num+2;
};
let addFive2=(num)=>num+2;
console.log(addFive1(14));

