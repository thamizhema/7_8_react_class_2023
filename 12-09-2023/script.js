// default parameter
// default parameter with value
// rest parameter
// arguments

function add(...values) {
  let ans = 0;

  //   for (let val of values) {
  //     console.log(val);
  //     ans += val;
  //   }

  for (let i = 0; i < values.length; i++) {
    ans += values[i];
  }

  console.log("==");
  console.log(ans);
}

// add(10, 40, 47, 38, 50);

function sub() {
  let ans = 0;
  console.log(arguments);
  for (let i of arguments) {
    ans -= i;
  }
  console.log(ans);
}

// sub(27, 57, 38, 2, 6);

// map,filter, and reduce

const myValues = [10, 20, 30, 40, 50];

function updateMapValue(x) {
  return x + 5;
}

const updatedValue = myValues.map(updateMapValue);

console.log(myValues);
console.log(updatedValue);

const users = ["python", "java", "C++", "HTML"];
const ul_items = users.map((user, ind) => {
  return `<li>${user}</li> ${ind}`;
});
console.log(users);
console.log(ul_items);

for (let i of ul_items) {
  console.log(i);
  console.log("------");
}

const forUser = users.forEach((user, ind) => {
  console.log("working with foreach", ind);
  return `<li>${user}</li> ${ind}`;
});

console.log(forUser);

const salaryList = [10000, 30000, 488888, 499, 20000];

const filtSal = [];
for (let salary of salaryList) {
  if (salary <= 30000) {
    filtSal.push(salary);
  }
}

const filteredSalary = salaryList.filter((item) => {
  return item >= 30000;
});
console.log(filteredSalary);

let totalSal = 0;
for (let s of salaryList) {
  totalSal += s;
}

let totalSalary = salaryList.reduce((a, b) => {
  return a + b;
});
console.log(totalSalary);

const employers = [
  { name: "python", age: 20, exp: 2, salary: 30000, gender: "Male" },
  { name: "java", age: 20, exp: 4, salary: 30000, gender: "Female" },
];

function getEmploryerCount(employList, gender) {
  return employList.length;
}

let empCount = getEmploryerCount(employers, "male");
console.log(empCount);
