import faker from "faker";
import("./hello.js");
let products = "";

for (let i = 0; i < 6; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;

console.log(`%c "${products}"`, "background: lightblue; color: white");
