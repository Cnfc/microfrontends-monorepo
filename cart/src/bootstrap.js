import faker from "faker";
import("./hello.js");

const cartText = `<div> You have ${faker.random.number(
  20
)} items in your cart</div>`;

document.querySelector("#dev-cart").innerHTML = cartText;
