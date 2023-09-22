// const b = "API_KEY";
// let a = 20;
// console.log(b, a);
// a = 50;
// b = "NEW_API_KEY";
// const arr = [];
// arr.push("ff")

// scope

// var text = "javascript";
// {
//   var text = "python";
//   let c = "help";
// }

// var i = 50;
// console.log(i);
// for (var i = 0; i < 10; i++) {
//   console.log("loop ", i);
// }
// console.log(i);
// // console.log(text);
// function testFun() {
//   var g = 78;
//   console.log(g);
// }
// testFun();
// console.log(g);

// const lang = ["python", "js", "c++"];
// console.log(lang[1]);
// lang.pop();
// console.log(lang);
// lang.shift();
// console.log(lang);

// lang.push("flutter");
// console.log(lang);
// lang.unshift("dart");
// console.log(lang);

const py = { name: "python", age: 20, number: "8934567" };
py["age"] = 89;
console.log(py["age"]);

py.name = "Java";
console.log(py.name);

const users = [
  { name: "python", age: 20, number: "8934567" },
  { name: "java", age: 20, number: "8934567" },
  { name: "c++", age: 20, number: "8934567" },
];

console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);
