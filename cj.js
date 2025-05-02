//Concurrency=>Running of simultaneous events is termed as concurrency.
// Callback is basically a funtion that takes another function as an argument.
// function dosomething(callback){
//     console.log("I am doing something");
//     callback();
// }
// function sayhello(){
//     console.log("Hello"); 
// }
// // dosomething(sayhello);
// function judge(grade){
//     switch(true){
//         case grade =="A":
//             console.log("You got an ",grade);
//             break;
//         case grade =="B":
//             console.log("You got an ",grade);
//             break;
//         case grade =="C":
//             console.log("You got an ",grade);
//             break;
//         case grade =="D":
//             console.log("You got an ",grade);
//             break;
//         default:
//             console.log("You got an F");

//     }
// }
// // judge("A");
// // judge("B");
// // judge("C");
// // judge("D");
// // judge("F");

// function getgrade(score,callback){
//     let grade;
//     switch(true){
       
//         case score >=90:
//             grade="A";
//             break;
//         case score >=80:
//             grade="B";
//             break;
//         case score >=70:
//             grade="C";
//             break;
//         case score >=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     callback(grade);
//     // It is reffering to the judge funtion

// }
// getgrade(85,judge);
// Here judge is the callback 
// Synchronous is blocking
// Asynchronous is non blocking
// setTimeout(() => {
//     console.log("Hello");
    
// }, 1000);
// // Time is in milliseconds
// setInterval(() => {
//     console.log("Hello"); 
// })
// setInterval(encourage,500);
// function encourage(){
//     console.log("You are doing great Keep doing");
// }

// Promises in javaScript
// We can do  execution much faster than callback.
// Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// It takes two parameters and both of them are call back they are resolve and reject
// When resolve() is called ,the promise is resolved and when reject is called the promise is rejected and goes to the catch block.
// let promise=new Promise((resolve,reject)=>{
//     let x=20;
//     let y=40;
//     if(x>15){
//         resolve(x);
//     }
//     else{
//         reject("Too low");
//     }

// });
// promise.then((value1)=>{
//     console.log(value1);
// }
// // Resolve function
// ).catch((error)=>{
//     console.log(error); 
// // })
// // Object.then
// let promise=new Promise((resolve,reject)=>{
//     resolve("Hello");
// })
// .then((value)=>{
//     console.log(value);
//     return "we"; 
// })
// .then((value) => {
//     console.log(value);
//     return "are";
// })
// .then((value) => {
//     console.log(value);
//     return "learning"; 
// })
// .catch((error) => {
//     console.log(error);
// })
// Async and Await 
// Async and await are used for 
// Call backs take  another function as an argument or function passed into another function as an argument.

// function dosomething(callback){
//     callback();
//     console.log("After the callback");
// }
// function sayHi(){
//     console.log("Hi");
// }
// dosomething(sayHi);
// Async and await
// With the async keyword we can define a function that returns a promise .
// async function dosomething(){
//     console.log("I am doing something");
//     console.log("After the callback");
// }
// dosomething();
// Awai tonly works inside async function
// function saysomething(x){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Something"+x);
//         },2000);
//     });

// }
// // Aet time out is also a callaback because it takes a function as an argument.
// async function talk(x){
//      const words=await saysomething(x);
    
//     console.log(words); 

// }
// talk(2);
// talk(3);
// talk(4);
// // Await does not work without async function.
// function saysomething(x){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Something"+x);
//         },2000);
//     });

// }
// function talk(x){
//     const words=saysomething(x);
   
//    console.log(words); 

// }
// talk(2);
// talk(3);
// talk(4);
// Event loop
// The java scipt is a  single threaded language .A thread in this context means execution.
// If there is only a single path that means that the execution is in a single thread.
// Event loop is a mechanism that allows the java script to handle multiple tasks without blocking the execution of the program.
// Multithreading is a process of executing multiple threads simultaneously.
//Process is a program that is running.
// Thread is a sequence of instructions that are executed in a process.
// Multithreading is a process of executing multiple threads simultaneously.
// Call stack is a stack of functions that are called.
// Stack is a data structure that follows the LIFO(Last in First out) principle.
// Queue is a data structure that follows the FIFO(First in First out) principle.
// the event loop is aprocess that constantly checks if there are any tasks to be executed  and whenever a task is ready it is pushed to the call stack.
// // The tasks on the top of stacks is executed first

// console.log("Hello")
// add(4,5);
// function add(x,y){
//     console.log(x+y);
// }
// They are maintained in call stacks.
// For async we use queues.
// console.log("Hello")
// setTimeout(()=>{
//     console.log("Sorry I m late");
// },0);

// console.log(add(4,5));
// function add(x,y){
//     return x+y; 
// }
// Async removes from normal threading

// 1 and 3 goes to callback stack while 2nd onemoves to queue.
// Callstack empty then 2nd is executed.
// 1 and 3 goes to callback stack while 2nd onemoves to queue
// Settimeout goes to browser web api .

