import faker from "faker";
import("./hello.js");

const mount = (el) => {
  const cartText = `<div> You have ${faker.random.number(
    20
  )} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };
