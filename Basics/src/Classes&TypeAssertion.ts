                            // Classes in TypeScript


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
}

const person4 = new Person("Arfan", 25);
console.log(person4);

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const student = new Student("Arfan", 25);
console.log(student);

// --------------------------------------------------------
                            // Type Assertion

// TypeScript allows you to use type assertions to tell the compiler that you know the type of a value at runtime.
// TypeScript doesn't know about the runtime type of values, so it's up to you to tell it.

const btn = document.getElementById("btn") as HTMLButtonElement ;
const btn1 =<HTMLElement> document.getElementById("btn");

const img = document.getElementById("img") as HTMLImageElement;
// const img1=document.querySelector("img")
// img.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = (document.getElementById("name") as HTMLInputElement).value;
  console.log(name);
});

const h2=document.createElement("h2");
h2.textContent="Hello World";
document.body.appendChild(h2);

interface data{
  [key:string]:string
}

const myobject:data={
    name:"Arfan",
    age:"25"
}
const getInfo=(key: keyof data):string => {
    return myobject[key];
}
getInfo("name");
// getInfo("student"); can not work



// --------------------------------------------------------
                              // Utility Types


type Todo ={
  title: string;
  description: string;
  completed: boolean;
}

// Partial<Type> it is used to make all properties of a type optional
type TodoPreview = Partial<Todo>

// Required<Type> -> opposite of Partial it is used to make all properties of a type required
type TodoRequired = Required<Todo>

// Readonly<Type> -> it is used to make all properties of a type readonly
type TodoReadonly = Readonly<Todo>

// Record<Keys, Type> -> it is used to create a type with a set of properties
type TodoRecord = Record<"title" | "description", string>

// pick<Type, Keys> -> it is used select a subset of a type
type TodoPick = Pick<Todo, "title" | "description">

// omit<Type, Keys> -> it is used to remove a subset of a type
type TodoOmit = Omit<Todo, "completed">

// Exclude<Type, Union> -> it is used to remove a union of types from a type
type myUNION= string | number | boolean
type TodoExclude = Exclude<myUNION, string>

// Extract<Type, Union> -> it is used to extract a union of types from a type
type TodoExtract = Extract<myUNION, string | number>

// NonNullable<Type> -> it is used to remove null and undefined from a type
type TodoNonNullable = NonNullable<string | number | undefined>

// Parameters<Type> -> it is used to get the parameters of a function type
const myFunction = (x: number, y: number) => x + y;
type TodoParameters = Parameters<typeof myFunction>

// ReturnType<Type> -> it is used to get the return type of a function type
type TodoReturnType = ReturnType<typeof myFunction>

// ConstructorParameters<Type> -> it is used to get the parameters of a constructor function type
class MyClass {
  constructor(public name: string) {}
}
type TodoConstructorParameters = ConstructorParameters<typeof MyClass>

// InstanceType<Type> -> it is used to get the instance type of a constructor function type
type TodoInstanceType = InstanceType<typeof MyClass>
