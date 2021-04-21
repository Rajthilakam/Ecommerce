const cart = document.getElementsByClassName('cart-coll');
console.log(cart)
console.log('hello')

const check = document.querySelector('.cart-coll');
console.log(check)

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
    



  
  