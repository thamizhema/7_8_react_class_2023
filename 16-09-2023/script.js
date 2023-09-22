let user = { name: "java", age: 20, email: "java20@gmail.com" };

// console.log(Object.entries(user));

// Object.values(user).map((e) => {
//   console.log(e);
// });

// for (let i in user) {
//   console.log(i);
// }

const myData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 6000);

    setTimeout(() => {
      reject("server timeout");
    }, 5000);
  });
};

async function getData() {
  const data = await myData();
  console.log(data);
}
// getData();

// myData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

class User {
  constructor(n, a) {
    console.log("user constuctor called");
    this.name = n;
    this.age = a;
    this.number = "1234567";
  }

  getEmail() {
    console.log(this);
    console.log(this.name + this.age + "gmail.com");
  }
}

class Employe extends User {
  constructor(n, a, sa) {
    super(n, a);
    this.salary = sa;
  }
  salary = 0;
}
const emp = new Employe("flutter", 30, 30000);
console.log(emp.getEmail());
