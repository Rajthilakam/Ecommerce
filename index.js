const homePage = document.querySelector('.homePage')
console.log(homePage)

class Products {
    async getProducts() {
      try {
      let result = await fetch('http://localhost:3000/index.json'); 
      let data = await result.json();
      console.log(data)
      let products = data.items;
      return products
    } catch(error){
      console.log(error)
    }
    }
  }

class UI {
displayProducts(products) {
    console.log(products)
    let result = '';
    products.forEach(product => {
        result += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-80 card-border" data-id=${product.sys.id}>
                    <a href= ${product.href}><img class="card-img-top img-fluid " src="${product.image}" alt="Product"></a>
                    <div class="card-body">
                    <h4 class="card-title">
                        <a href=${product.href}>${product.title}</a>
                    </h4>
                    </div>
                </div>
            </div> `            
        
    });
    homePage.innerHTML = result
}
}

document.addEventListener('DOMContentLoaded',() => {
    const products = new Products()
    const ui = new UI()
    products.getProducts().then(products => ui.displayProducts(products))
  })
  
