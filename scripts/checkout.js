import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import '../data/car.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js'

//we need to send a request and then use a callback to wait for a response
async function loadPage(){
  try{
    //throw 'error1';
    await loadProductsFetch();

    const value=await new Promise((resolve,reject)=>{
      throw 'error2';
      //second step
      loadCart(()=>{
        // reject('error3');
        resolve('value3');
      });
    });

  } catch(error){
    console.log('Unexpected error.Please try again later');
  }
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();
/*
Promise.all([
  loadProductsFetch(),

  new Promise((resolve)=>{
    //second step
    loadCart(()=>{
      resolve();
    });
  })
]).then((values)=>{
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
new Promise((resolve)=>{
  //start promise-first step
  loadProducts(()=>{
    console.log('finished loading');
    resolve();
  })

}).then(()=>{
  return new Promise((resolve)=>{
    //second step
    loadCart(()=>{
      resolve();
    });
  });
  
}).then(()=>{//third step
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
  
/*
loadProducts(()=>{
    loadCart(()=>{
      renderCheckoutHeader();
      renderOrderSummary();
      renderPaymentSummary();
    });
}); */

