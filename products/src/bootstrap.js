import faker from "faker";
import("./hello.js");

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
  console.log(`%c "${products}"`, "background: lightblue; color: white");
  // ReactDom.render(<App/>, el)
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

export { mount };
