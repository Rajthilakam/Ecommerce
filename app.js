
/*
const modal = document.getElementById('cart-btn');
console.log(modal)
const modalCart = document.getElementById("cart-content");
console.log(modalCart)
const close = document.getElementsByClassName("close")[0]
console.log(close)


modal.onclick = function() {
    modalCart.style.display = "block";
  }

close.onclick = function() {
    modalCart.style.display = "none";
  }  

window.onclick = function(event) {
    if (event.target == modalCart) {
      modalCart.style.display = "none";
    }  
 */





$(function(){
$("#cart-btn").click(function () {
    $("#cart-content").modal('show');
}) 
})



const cart = document.querySelector('.cart-btn');
console.log(cart)

const cartItems = document.querySelector('.cartItems').innerHTML;
console.log(cartItems)

const cartContent =document.querySelector('.cart-content')
console.log(cartContent)

const cartPage = document.querySelector('.cart-page');
console.log(cartPage)

fetch('http://localhost:3000/products.json')
.then(response => {
    console.log(response);
    console.log(typeof response)
    return response.json()
})
.then(response => {
    let result = response
    console.log(typeof result)
    console.log(result.items[0].image)
})
.catch(error => {
    console.error(error)
})
    



  
  