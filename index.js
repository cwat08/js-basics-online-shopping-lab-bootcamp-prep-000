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
  var allContentsInCart = ""
  if(!cart.length){
    console.log(`Your shopping cart is empty.`)
  }
  if(cart.length === 1){
    console.log(`'In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}).'`)
  }
}

//   for(var i=0; i<cart.length; i++){
//     allContentsInCart += ` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`
//   }
//   return `In your cart you have${allContentsInCart}.`
// }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
