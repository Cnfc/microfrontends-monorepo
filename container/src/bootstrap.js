import { mount as ProductsMount } from "products/ProductsIndex";
import { mount as CartMount } from "cart/CartShow";

ProductsMount(document.querySelector("#dev-products"));
CartMount(document.querySelector("#dev-cart"));
// console.log("Container");
console.log("%c MAIN Path", "color: red");
