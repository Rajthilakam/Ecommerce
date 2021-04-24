const toysPage = document.querySelector(".products")
console.log(toysPage)
    
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
        let result = '';
        products.forEach(product => {
            result += `
            
            <div class="row">
            <div class="col">
                <div class="card mb-5" style="max-width: 1240px;">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src=${product.image} class="card-img" alt="Toys">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h2 class="card-title">${product.title}</h2><br>
                        <h5 class="card-text">${product.description}</h5><br>
                        <div class="row row-content">
                          <div class="col-6 item-price">
                            <h5 id="item-price">$${product.price}</h5>
                          </div>
                          <div class="col-6 ">
                            <button type="button" id="addCart" data-id=${product.sys.id} class="btn addCart">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>             
            </div>
          </div>  `            
        });
        toysPage.innerHTML = result;    
    }        
}  

  document.addEventListener('DOMContentLoaded',() => {
    const products = new Products()
    const ui = new UI()
    products.getProducts().then(products => ui.displayProducts(products))
  })
