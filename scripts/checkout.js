import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js'
import '../data/car.js';
//we need to send a request and then use a callback to wait for a response
loadProducts(()=>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});  

