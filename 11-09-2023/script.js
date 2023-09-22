const arr = ["python", "java", "c++", "flutter", 23];
/// for loop
// var loop1Isbreaked = false;
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     loop1Isbreaked = true;
//     break;
//   }
// }
// if (!loop1Isbreaked) {
//   console.log("for loop successfuly completed");
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i in arr) {
//   console.log(i, typeof i);
// }

// for (let i of arr) {
//   console.log(i, typeof i);
// }

/// while loop

// let a = 10;

// while (a < 10) {
//   console.log(a);
//   a++;
// }

// let a = 10;
// do {
//   console.log(a);
//   a++;
// } while (a < 10);

// function parameters
// function declaration
// funation expression
// arrow function

// default parameter
function greeting1(name) {
  console.log("hi, " + name);
}

greeting1("python");
greeting1();

// default parameter with value
function greeting2(name = "there") {
  console.log("hi, " + name);
}

greeting2("python");
greeting2();
