const userData = [
  { name: "python", age: 20 },
  { name: "java", age: 30 },
];

function myData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userData);
    }, 3000);
  });
}

export { myData };
