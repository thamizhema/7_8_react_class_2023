const user = { name: "java", age: 30, email: "java30@gmail.com" };

const { email, name, age } = user;

console.log(name);
console.log(age);
console.log(email);

const skills = ["python", "flutter", "node", "js", "html", "css"];

const [s1, s2, s3, ...other] = skills;

console.log(other);
