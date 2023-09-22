// rest and spred operator [],{}, ()
// type of functions
// type of parameters

// Object => Map, Dict
// Array => List

// const myArr = [1, 2, 3, 4];
// const arr = ["a", "b", "c", "d"];
// const arr2 = ["L", "j", "k", ""];

// myArr.concat(arr, arr2);

// console.log(myArr.concat(arr));
// console.log([...arr2, ...myArr, ...arr]);

// const obj1 = { name: "python", age: 20 };
// const obj3 = { name: "python", age: 20 };
// const obj2 = { number: 12345, email: "ddsf@gmil.com", name: "java" };
// console.log({ ...obj1, ...obj2 });

// console.log(obj1 === obj3);
// console.log(JSON.stringify(obj1) === JSON.stringify(obj3));

// var a = '{ name: "python", age: 20 }';
// var b = '{ name: "python", age: 20 }';
// console.log(a === b);

// function declaration
// funation expression
// arrow function

// let ans = a_myFunction();
// console.log(ans);

// function a_myFunction() {
//   console.log("my gloal function");
// }

// var expFun = function () {
//   console.log("my expression function");
// };
// expFun();

// var arrFun = () => {
//   console.log("this is my arrow function");
// };

// arrFun();

const user = {
  f_name: "java",
  l_name: "script",
  getEmail: function () {
    console.log(this);
  },
  makeEmail: () => {
    console.log(this);
  },
};

user.getEmail();
user.makeEmail();

const a = ab();
function ab() {
  return 20;
}
console.log(a);
