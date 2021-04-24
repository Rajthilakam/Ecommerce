
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



const cartBtn = document.querySelector('.cart-btn');
console.log(cartBtn)

const cartItems = document.querySelector('.cartItems').innerHTML;
console.log(cartItems)

const cartContent =document.querySelector('#cart-content')
console.log(cartContent)

const cartPage = document.querySelector('.cart-page');
console.log(cartPage)

const removeItem = document.querySelector('#remove-item')
console.log(removeItem)

const orderTotal = document.querySelector('.orderTotal').textContent;
console.log(orderTotal)

const addCart =document.querySelector('.addCart')
console.log(addCart)

const products = document.querySelector('.products')
console.log(products)

let cart = []

class Products {
  async getProducts() {
    try {
    let result = await fetch('http://localhost:3000/toys.json'); 
    let data = await result.json();
    console.log(data)
    let products = data.toys;
    return products
  } catch(error){
    console.log(error)
  }
  }
}


class UI {
  displayProducts(products) {
    console.log(products)

  }
}

class Storage {

}

document.addEventListener('DOMContentLoaded',() => {
  const products = new Products()
  const ui = new UI()
  products.getProducts().then(products => ui.displayProducts(products))
})




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
    



  
  