// WHat are classes in java script=>Blue pirnt or template for object creation
// Adbvantages
// 1. Code reusability
// 2. Easy to maintain
//oops features
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction
// 5. Data hiding
// Object is a collection of properties and methods(key and value pair)
// let dog={
//     dogname:"dog",
//     dogage:10,
//     dogcolor:"black",
//     dogbreed:"german shephard",
//     dogweight:10,
// }
// console.log(dog.dogname);
// console.log(dog.dogage);
// console.log(dog.dogcolor);
// console.log(dog.dogbreed);


// Constructor characteristics

// 1. Constructor name should be capitalized
// 2. Constructor should be called with new keyword
// 3. Constructor should be called with new keyword
// 4. Constructor should be called with new keyword
// This keyword
// Difference between this.prop and prop
// 1. this.prop is a property of the object and prop is a local variable

// class Classname{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
    
//     }
// }
// let obj=new Classname("value1","value2");
// let obj2=new Classname("value3","value4");
// console.log(obj.prop1);
// console.log(obj.prop2);
// console.log(obj2.prop1);
// console.log(obj.prop1);
// console.log(obj.prop2);
// // console.log(obj.prop3); //undefined
// // // console.log(obj.prop4); //undefined
// function Dog(dogname,dogage,dogcolor,dogbreed,dogweight){
//     this.dogname=dogname;
//     this.dogage=dogage;
//     this.dogcolor=dogcolor;
//     this.dogbreed=dogbreed;
//     this.dogweight=dogweight;

// }
// let dog1=  new Dog("dog1",10,"black","german shephard",10);
// console.log(dog1.dogname);
// console.log(dog1.dogage);
// console.log(dog1.dogcolor);
// console.log(dog1.dogbreed);
// console.log(dog1.dogweight);
// this is used for object creation 
// It  is convention to  start the classanme in capitalization
// class person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let person1=new person("Nishkarsh","Pandey");
// console.log("Hi",person1.firstname);
// console.log(person1.lastname);
// console.log("Hello",person1.firstname,person1.lastname,"Nice to meet you");
// Methods orther than constructor

// Methods are the function in the class containing data and functions(methods)
// No need of function keyworrd in mtehods and can directly start with the name of the method
//Coinstruyctor is udes to initialize the object and methods are used to perform the operations on the object
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hello",this.firstname,this.lastname,"Nice to meet you");
//     }
// }
// let person1=new Person("Nishkarsh","Pandey");
// console.log("Hi",person1.firstname);
// console.log(person1.lastname);
// person1.greet();
// First constructor and then method in theclass
// Attribute retauns the value of the object and method performs the operation on the object
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hello",this.firstname,this.lastname,"Nice to meet you");
//     }
//     compliment(){
//         console.log("You are doing great",this.firstname,this.lastname);
//     }
// }
// let person1=new Person("Nishkarsh","Pandey");
// console.log("Hi",person1.firstname);
// console.log(person1.lastname);
// person1.greet();
// person1.compliment();
// Constructor class  defines the properties of the object and methods defines the operations on the object
// TO initialize the object we use constructor and to perform the operations on the object we use methods.
// Difference between this.prop and prop
// 1. this.prop is a property of the object and prop is a local variable
// 2. this.prop is a property of the object and prop is a local variable
// This refers to the current object and prop is a local variable
// Why are classes called blurprint
// 1. Classes are called blueprints because they define the structure and behavior of objects, similar to how a blueprint defines the structure of a building.
// 2. Classes provide a template for creating objects, allowing for code reusability and organization.
// 3. Just as a blueprint can be used to create multiple buildings with the same design, a class can be used to create multiple objects with the same properties and methods.
// 4. Classes encapsulate data and behavior, making it easier to manage and maintain code.
// 5. Classes allow for inheritance, enabling the creation of new classes based on existing ones, further enhancing code reusability and organization.
// 6. Overall, classes serve as a blueprint for creating objects, providing a structured way to define and organize code in object-oriented programming.
// Methods in java script
// 1. Constructor method: The constructor method is a special method for creating and initializing an object created with a class. It is called automatically when a new instance of the class is created. The constructor method can take parameters to initialize the object's properties.
// 2. Instance methods: Instance methods are methods that are called on an instance of a class. They can access and modify the properties of the object.
// 3. Static methods: Static methods are methods that are called on the class itself, rather than on an instance of the class. They can be used to create utility functions or to access properties of the class.
// 4. Getter methods: Getter methods are used to access the properties of an object. They are defined using the get keyword and can be used to perform calculations or transformations on the object's properties before returning them.
// 5. Setter methods: Setter methods are used to set the properties of an object. They are defined using the set keyword and can be used to perform validation or transformations on the input before setting the object's property.
// 6. Private methods: Private methods are methods that are only accessible within the class. They are defined using the # symbol before the method name and cannot be accessed from outside the class. Private methods are used to encapsulate functionality that should not be exposed to the outside world.
// 7. Public methods: Public methods are methods that are accessible from outside the class. They can be called on an instance of the class and can be used to perform operations on the object's properties. Public methods are defined without any special syntax and are accessible from outside the class.
// 8. Abstract methods: Abstract methods are methods that are declared but not implemented in the class. They are meant to be overridden in subclasses and provide a way to define a common interface for a group of related classes. Abstract methods are defined using the abstract keyword and cannot be called directly on the class.
// 9. Final methods: Final methods are methods that cannot be overridden in subclasses. They are defined using the final keyword and provide a way to prevent subclasses from changing the behavior of a method. Final methods can be used to ensure that a method's implementation remains consistent across all subclasses.
// 10. Overloaded methods: Overloaded methods are methods that have the same name but different parameters. They can be used to provide different implementations of a method based on the input parameters. Overloaded methods are defined using the same name and can be distinguished by their parameter types or number of parameters.
// Abstraction real world scenario
// 1. Abstraction is a concept in object-oriented programming that allows you to hide the implementation details of an object and only expose the necessary information to the outside world.
// Purpose of constructor  is to initialize the attribute values like first name and last name.
// Functinon in the class are methods but we domt use keyword function in the class.
// this referes to the current object and prop is a local variable
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hello",this.firstname,this.lastname,"Nice to meet you");
//     }
// }
// let person1=new Person("Nishkarsh","Pandey");
// person1.greet();
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hello",this.firstname,this.lastname,"Nice to meet you");
//     }
//     compliment(name,object){
//         console.log("You are doing great",this.firstname,this.lastname,"Nice to meet you",name,object.firstname,object.lastname);
//     }
    


// }
// let compliment=new Person("Nishkarsh","Pandey");
// let compliment2=new Person("Nishkarsh","Pandey");
// compliment.greet();
// compliment.compliment("Nishkarsh",compliment2); 
// Either you can use a class variable or a local variable but not both
// Properties are the variables in the class and methods are the functions in the class
// Why do we use classes in java script
// axis specifiers in java give public,private and protected
// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
// }
// let person1=new person("Nishkarsh","Pandey");
// console.log(person1.#firstname);
// console.log(person1.#lastname);
// console.log(person1 .firstname);
// console.log(person1.lastname);
// Undefined for both

// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         if (firstname.startsWith("N")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "N" + firstname;
//         }
//         this.#lastname = lastname;
//     }

//     getFirstName() {
//         return this.#firstname;
//     }

//     getLastName() {
//         return this.#lastname;
//     }
// }

// let person1 = new Person("Nishkarsh", "Pandey");
// console.log(person1.getFirstName());
// console.log(person1.getLastName());
// Getters and setters
// Encapsulation means hiding the data from the outside world and only exposing the necessary information to the outside world.
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//          this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }

// }
// let person=new Person("Nishkarsh","Pandey");
// console.log(person.firstname);
// person.firstname="Nishkarsh";
// console.log(person.firstname);
// console.log(person.lastname);
// person.lastname="Pandey";
// console.log(person.lastname);
// Gett and Set are user deined functions
// Get and set are methods of the class
// Why use get and set
// INHERITANCE types are
// 1. Single inheritance
// 2. Multiple inheritance
// 3. Multilevel inheritance
// 4. Hierarchical inheritance
// 5. Hybrid inheritance
// Concept that child classes acess the properties of their parent class
// class Vehicle{
//     constructor(brand,color,maxspeed){
//         this.brand=brand;
//         this.color=color;
//         this.maxspeed=maxspeed;
//     }
//     move(){
//         console.log("Moving at:",this.maxspeed);
//         console.log("Brand is :",this.brand);
//         console.log("Color is :",this.color);
//     }
    


// }
// // let car=new Vehicle("BMW","Black",200);
// // car.move();
// class MotorCycle extends Vehicle{
//     constructor(brand,color,maxspeed,engine){
//         super(brand,color,maxspeed);
//         this.engine=engine;
//     }
//     dowheelie(){
//         console.log("Doing wheelie");
//     }
   
    
// }
// let bike=new MotorCycle("BMW","Black",200,"100cc");
// bike.move();
// bike.dowheelie();




// class Car extends Vehicle{
//    constructor(brand,color,maxspeed,fuel){
//     super(brand,color,maxspeed);
//     this.fuel=fuel;
      
//    } 
//    doothing(){
//     console.log("Doing nothing");
//    }
// }
// let Car1=new Car("BMW","Black",200,"Petrol");
// Car1.move();
// Car1.doothing();
// class Motor{
//     constructor(brand,color,maxspeed,engine){
//         this.brand=brand;
//         this.color=color;
//         this.maxspeed=maxspeed;
//         this.engine=engine;
//     }
// }
// let nothing= new Motor("BMW","Black",200,"100cc");
// console.log(nothing.brand);
// // Wr cannot accerss any motor cycle props into vehicle class(Because herirachy works like from top to bottom)
// // Prototypes
// // Classname.prototeyp
// class Person{
//     constructor(fisrtname,lastname,color){
//         this.fisrtname=fisrtname;
//         this.lastname=lastname;
//         this.color=color;

        
//     }
//     greet(){
//         console.log("Hello",this.fisrtname,this.lastname);
//     }
// }
// Person.prototype.introduce=function(){
//     console.log("My name is",this.fisrtname,this.lastname);
// }
// Person.prototype.introduce=function(){
//     console.log("My fav color is",this.favcolor);
// }
// let person1=new Person("Nishkarsh","Pandey");
// let color1=new Person("Green")
// person1.greet();
// person1.introduce();
// color1.introduce();

// Introduce the class name
// git push -U origin main





