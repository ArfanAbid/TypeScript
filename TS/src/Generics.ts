                                // Generics in Typescript
// In TypeScript, generics provide a way to create reusable and flexible code components that work with various types while ensuring type safety. They allow you to define a component (like a function, class, or interface) without specifying the exact type upfront, making the code more dynamic and type-checked at the same time

// Generic Function
function identity<T>(arg: T): T {
  return arg;
}
// with using 'any' The problem here is that the type of the return value is not related to the type of the input, which might lead to errors.
// To avoid this, you can use generics to specify the type of the return value based on the type of the input.

const resul1=identity<string>("Arfan");// T is string

// using multiple generics
function identity2<T, U>(arg1: T, arg2: U): T {
  return arg1;
}

// Generic array
const arr2: Array<string> = ["apple", "orange"];
const arr3: Array<number> = [1, 2, 3];


// Generic Class

class Box<T> {
    content: T;
  
    constructor(value: T) {
      this.content = value;
    }
  
    getContent(): T {
      return this.content;
    }
  }
  
  // Usage:
  const stringBox = new Box<string>("Hello");
  console.log(stringBox.getContent()); // "Hello"
  
  const numberBox = new Box<number>(123);
  console.log(numberBox.getContent()); // 123
  


  // Generic Interface

  interface KeyValuePair<K, V> {
    key: K;
    value: V;
  }
  
  const item: KeyValuePair<number, string> = { key: 1, value: "Apple" };
  console.log(item); // { key: 1, value: "Apple" }



// Example

type Persons={
    name:string,
    age:number
}
const users:Persons[]=[
    {name:"Arfan",age:25},
    {name:"iffi",age:26},
    {name:"leo",age:27},
    {name:"amoi",age:28},
]

function filterByPeople<T,K extends keyof T>(arr:T[],key:K,value:T[K]):T[]{
    return arr.filter(item=>item[key]===value);
}

const filterPeopleByName=filterByPeople(users,"name",'iffi');
const filterPeopleByAge=filterByPeople(users,"age",27);

console.log(filterPeopleByName);
console.log(filterPeopleByAge);

/* 
T: Represents the type of objects in the array (Persons in this case).
K: Represents the keys of T (e.g., "name" or "age").

arr: T[]: An array of objects (e.g., users).
key: K: A specific key from the objects ("name" or "age").
value: T[K]: A value to match against the key (e.g., 'iffi' or 27).

*/