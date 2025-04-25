// Mapping in java
// const fruits=["apple","mango","banana"];
// const prices=[200,100,50];
// const map=new Map();
// for(let i=0;i<fruits.length;i++){
//     map.set(fruits[i],prices[i]);
// }
// console.log(map);
// const fruits=["apple","mango","banana"];
// // Set 
// const prices=new Set([200,100,50]);
// const map=new Map();
// for(let i=0;i<fruits.length;i++){
//     map.set(fruits[i],prices[i]);

// }
// console.log(map);
// constfruits=["apple","mango","banana"];
// console.log(typeof fruits);
// INstances meaning 
// Javascript map and object difference give me the differences
// 1. Map is iterable, object is not iterable
// 2. Map is a collection of keyed data items, object is not a collection of keyed data items
// 3. Map can have primitive keys, object can have only string keys
// 4. Map can have any type of keys, object can have only string keys
// 5. Map can have any type of values, object can have only string 
// Javascript map methods
// Size method
// const fruits=["apple","mango","banana"];
// console.log(fruits.length);
// console.log(fruits.size);

// console.log(fruits.delete("apple"));
// console.log(fruits.delete("mango"));  
// Map.has() example


// const prices=[200,100,50];
// const map=new Map();

// console.log(map.has("apple"));
// console.log(map.has("mango"));
// // 
//Call back function is a function that is passed as an argument to another function and is executed after the completion of that function.
// let text="";

// const fruits=["apple","mango","banana"];
// // fruits.forEach(myFunction);
// // function myFunction(value,index,array){
// //     text+=index +" "+ value;
// // }
// // // text scope is 

// // console.log(text);
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);

// const fruits=["apple","mango","banana"];
// for(const x of fruits.values()){
//     console.log(x);
// }
// // We can aslo use fruits.keys()
// // 
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);
// Map differences between object and map
// 1. Map is iterable, object is not iterable
// 2. Map is a collection of keyed data items, object is not a collection of keyed data items
// 3. Map can have primitive keys, object can have only string keys
// 4. Map can have any type of keys, object can have only string keys
// 5. Map can have any type of values, object can have only string
// const apples={name:"apple"};
// const mangoes={name:"mango"};
// const bananas={name:"banana"};
// const prices=new Map();
// console.log(prices.set(apples,200
// ));
// console.log(prices.set(mangoes,100));
// // Addnew elements
// // KEY ARTE OBJECTS
// console.log(fruits.get(apples));
// map.groupBy()
// program
// const fruits=[
//     {name:"apple",price:200},
//     {name:"mango",price:100},
//     {name:"banana",price:50}
// ];
// const prices=new Map();
// for(const fruit of fruits){
//     prices.set(fruit.name,fruit.price);
// }
// console.log(prices
//);

// const fruits=[
//     {name:"apple",price:200},
//     {name:"mango",price:100},
//     {name:"banana",price:50}
// ];
// function mycallback({price}){
//     return price>100?"ok":"not ok";
// }
// const prices=new Map();
// const result=Map.groupBy(fruits,mycallback);
// console.log(result);
// let {firtsname,lastname}=person;
// Can also unpack arrays

// const person={
//     lastname:"John",
//     firstname:"Doe",
//     age:30,
//     city:"New York"
// };
// // const {firtsname,lastname,age,city}=person;
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);
// console.log(person.city);
// const person={
//     firtsname:"John",
//     lastname:"Doe",
//     age:30,
//     city:"New York"
// };
// let [firtsname,lastname,age,city]=person;
// console.log(firtsname);
// console.log(lastname);
// console.log(age);
// console.log(city);
// Person is not iteable
// Destructuring is  not destructuring
// const person={
//     firtsname:"John",
//     lastname:"Doe",
//     age:30,
//     city:"New York"
// }
// let {firtsname,lastname,age,city,country="USA"}=person;
// console.log(country);
// Alias in javascript
// const person={
//     firtsname:"John",
//     lastname:"Doe",

//     age:30,
//     city:"New York"
// }
// let {firtsname:fname,lastname:lname,age:age,city:city}=person;
// const person={
//     firtsname:"John",
//     lastname:"Doe",
//     age:30,
//     city:"New York"
// }
// let {firtsname:f,lastname:l,age:a,city:c,country="USA"}=person;
// console.log(f);
// console.log(l);
// console.log(a);
// console.log(c);
// console.log(country);

// Strig destructuring
// unpacking strug char
// const str="hello world";
// let [a1,a2,a3,a4,a5]=str;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// const fruits=["apple","mango","banana","orange","grape"];
// let [fruits1,,,fruits2]=fruits;
// console.log(fruits1);
// console.log(fruits2);
// // console.log(fruits2);
// import person from "./map.js";
// let {name,age,city}=person;
// console.log(name);
// const fruits=["apple","mango","banana","orange","grape"];
// let {[0]:fruits1,[2]:fruits2,[1]:fruits3,[3]:fruits4,[4]:fruits5}=fruits;
// console.log(fruits1);
// console.log(fruits2);
//  The rest property
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const [a,b,...rest]=numbers;
// console.log(a);
// console.log(b);
// console.log(rest);
// Definition used rest
// import {person} from "./script.js";
// console.log(person);
// const fruits=new Map([
//     ["apple",200],
//     ["mango",100],
//     ["banana",50]
// ]);
// let text="";
// for(const [key,value] of fruits.entries()){
//     text+=key+" "+value;
// }

// console.log(text);
// let firstname="John";
// let lastname="Doe";
// [firstname,lastname]=[lastname,firstname];
// console.log(firstname);
// console.log(lastname);
// let a=5
// console.log(a**2);
// console.log(typeof(a**2));
// Complement assignment
// includes()
// const  fruits=["apple","mango","banana"];
// console.log(fruits.includes("apple"));
// console.log(fruits.includes("mango",2));
// // Has and includes differfences is that has is used in map and includes is used in array
// includes is cas sensitive
// Trailing commas are 
// Difference between asyn and sync in onle line is that async is non blocking and sync is blocking
// Trailing commas are also k
// dangling in c means that the last element in an array or object can have a comma after it, but it is not required. This is useful for version control and code readability, as it allows you to add or remove elements without having to modify the previous line. In JavaScript, trailing commas are allowed in arrays and objects, but not in function parameters or arguments. For example:
// const arr= [1,2,3,4,5,6,7,8,9,10,];
// console.log(arr);
// let  is scope of the block and var is scope of the function.
// 
// const arr=["one","two","three",,];
// console.log(arr);
// Comma after 3 is the trailing comma
// Do not add more commas after the last element in an array or object, as it will cause a syntax error. For example:
// const arr=[1,2,3,4,5,6,7,8,9,10,,];
// // Syntax error
// console.log(arr.length);
// Sparse array
// const sparsearray=[1,2,,4,5,,7,8,,10];
// console.log(sparsearray.length);
// const arr=[,];

// console.log(arr.length);
// const person={
//     firstname:"John",
         
//     lastname:"Doe",
//     age:30,
//     city:"New York",

// }

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);
// console.log(person.city);
// console.log(person.length);
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.breed=breed;
//     }
//     bark(){
//         console.log("Woof Woof");
//     }
// }
// const dog=new Dog("Tommy","Labrador");
// console.log(dog.name);



