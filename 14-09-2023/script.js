// const btn = document.querySelector(".btn");

// btn.addEventListener("click", stopTimer);

// let count = 0;
// function myFunction() {
//   count++;
//   console.log("count =", count);
// }

// const timer = setInterval(myFunction, 1000 * 1);
// console.log(timer);

// function stopTimer() {
//   clearInterval(timer);
//   console.log("interval cleared");
// }

// setTimeout(() => {
//   console.log("Timeout called....");
// }, 1000 * 5);

const data = [];

const pr = "E";
function myData() {
  return new Promise((res, err) => {
    setTimeout(() => {
      if (pr === "E") {
        err("Something went wrong");
      } else {
        data.push("data1");
        data.push("data2");
        data.push("data3");
        res(data);
      }
    }, 3000);
  });
}

async function getData() {
  const ans = myData();
  console.log(ans);
}
//getData();

myData()
  .then((ans) => {
    console.log(ans);
  })
  .catch((e) => {
    console.log(e);
  });
