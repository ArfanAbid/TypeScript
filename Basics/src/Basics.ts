                                            // DataTypes in TypeScript


// 1. string
let myName: string = "Arfan";

// 2. number
let age: number = 25;
let price: number = 19.99;

// 3. boolean
let isActive: boolean = true;

// 4. any => it can be any type avoid using this because what is the purpose of typescript then :)
let data: any = "Hello";
data = 42; // valid
data = true; // valid

// 5. unknown => Represents any value but is safer than any. A variable of type unknown can hold any type of value, but you must perform type checking before performing any operation on it.
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.length); // valid
}

// 6. object
let person: object = { name: "Arfan", age: 25 };

// 7. Array
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "orange"];

// 8. void (used for functions that don't return a value)
function logMessage(message: string): void {
  console.log(message);
}

function add(x:number,y:number):number{  // return type will be number
  return x+y
}

// 9. null and undefined
let empty: null = null;
let notAssigned: undefined; // Represents a variable that has been declared but not assigned a value.

// 10. type alias
type Point = { x: number, y: number };
let point: Point = { x: 1, y: 2 };

// 11. Enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
let color: Color = Color.Red;


//Type Aliases: you can also write your own custom data types like
type User= string | number;
let user: User = "Arfan";
let id: User = 1;

type UserName=(n:number,m:number)=>number; // this is a function type alias takes two number and return a number type

const func:UserName = (n,m) =>{
  return n+m;
}


type ThemeMode="light" | "dark"; // this is a union type

// --------------------------------------------------------
                              // Arrays

let numbers1: number[] = [1, 2, 3];
let fruits1: string[] = ["apple", "orange"];
const arr1: Array<string> = ["apple","orange"];

const arr: (string | number)[] = [1, "apple", 2, "orange"];

// Tupples
let point1: [number, number] = [1, 2];

//-----------------------------------------------------------------
                            // Objects

type obj={
  name: string,
  age: number,
  gender? : boolean // ? means optional
}

let person1: obj={
  name: "Arfan",
  age: 25,
  gender: true
}

let person2: obj={
  name: "Arfan",
  age: 25
}

// Interfaces
interface Person {
  name: string;
  age: number;
  gender?: boolean;
}

let person3: Person = {
  name: "Arfan",
  age: 25,
  gender: true
}

type FuncType=(a:number,b:number)=>number;

interface person1 {
  name: string;
  age: number;
}

// Another Example
interface NewObj extends person1 {
  func?: FuncType
}

const obj1: NewObj = {
  name: "Arfan",
  age: 25,
  func: (a,b) => a+b
}

// ----------------------------------------------------------------
                              // Functions

type FuncType1=(a:number,b:number,c?:number)=>number;

// optional parameter
const func1:FuncType1 = (a,b,c) =>{
  if(typeof c === "number"){
    return a+b+c;
  }
  return a+b
} 

// Default parameter
const func2 =(a:number,b:number,c:number=10) => a+b+c

// Rest parameter
const func3 =(...args:number[]) => console.log(args)
func3(1,2,3,4,5);

// Function with Object
const func4 = (obj:{name:string,age:number}) => console.log(obj)
func4({name:"Arfan",age:25})

type GetDataType =(product:{
  name:string,
  stock:number,
  price:number,
  isAvailable:boolean
})=> void;

const getData:GetDataType = (product) => {
  console.log(product);
}

getData({
  name:"Arfan",
  stock:10,
  price:100,
  isAvailable:true
})

// Function with Array
const func5 = (arr:[string,string]) => console.log(arr)
func5(["Arfan","Arifan"])
