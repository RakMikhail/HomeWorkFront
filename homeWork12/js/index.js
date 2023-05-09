"use strict";

const getT = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve();
  }, "3999");
  setTimeout(() => {
    reject(new Error("qwe"));
  }, 4000);
});

//1. обработка промиса способом .then / .catch
getT
  .then((result) => console.log("done"))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise was finished in case (.then / .catch)"));

//2. обработка промиса способом async / await + try...catch

async function func() {
  try {
    let result = await getT;
    console.log("done on async");
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise was finished in case (async / await + try...catch)");
  }
}
func();
