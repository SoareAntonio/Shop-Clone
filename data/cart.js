import { validDeliveryOption } from "./deliveryOptions.js";
export let cart;

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  }
}
loadFromStorage();

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId,quantity){
  let matchingItem;
      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem ;
        }
      });
      if(matchingItem){
        matchingItem.quantity+=quantity;
      }else{
        cart.push({
          productId,
          quantity ,
          deliveryOptionId:'1'
        });
      }
      saveToStorage();
}
export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}
export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}
export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !==productId){
      newCart.push(cartItem);
    }
  });
  cart=newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;
      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem ;
        }
      });
    if(!matchingItem){
      return;
    }
    if (!validDeliveryOption(deliveryOptionId)) {
      return;
    }
  matchingItem.deliveryOptionId=deliveryOptionId;
  saveToStorage();
}

export function loadCart(fun = () => {}){//fun is named as callback-a function to run in the future
  const xhr=new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    /*products=JSON.parse(xhr.response).map((productDetails)=>{
      if(productDetails.type==='clothing'){
        return new Clothing(productDetails);
      } else if (productDetails.type === 'appliance') {
        return new Appliance(productDetails);
      }
      return new Product(productDetails);
      //map take each value ,run function transform and put it inside new array
    });*/
    console.log(xhr.response);
    fun();
  });

  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}
export async function loadCartFetch() {
  const response = await fetch('https://supersimplebackend.dev/cart');
  const text = await response.text();
  console.log(text);
  return text;
}
export function resetCart() {
  cart = [];
  saveToStorage();
}