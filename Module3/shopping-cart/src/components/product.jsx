import "./product.css"

let Product = ()=>{
    return (
        <div className="product-card">
             <div className="product-img">
                 <img src="https://images-eu.ssl-images-amazon.com/images/I/71sxlhYhKWL._AC._SR360,460.jpg" alt="" />
             </div>

             <div className="product-btn">
                  <button>Add to Cart</button>
             </div>
        </div>
    );
}

export default Product;