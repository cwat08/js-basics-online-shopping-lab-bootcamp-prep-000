var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newItemforCart = {}
newItemforCart[item] = (Math.floor(Math.random() * Math.floor(100)))
cart.push(newItemforCart)
console.log(`${item} has been added to your cart.`)
return cart
}


function viewCart() {
  if(!cart.length){
    console.log(`Your shopping cart is empty.`)
  }
  if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  }
  if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  }
  if(cart.length >= 3){
    var allContentsInCart = ""
    for(var i=0; i<cart.length-1; i++){
      allContentsInCart += `${Object.keys(cart[i])} at $${Object.values(cart[i])}`
    }
    console.log(`In your cart, you have ${allContentsInCart} and ${Object.keys(cart[(cart.length-1)])} at $${Object.values(cart[(cart.length-1)])}`)
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
