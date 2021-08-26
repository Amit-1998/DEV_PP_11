import Product from "./product"
import "./home.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

let Home = () => {

    let history = useHistory(); //useHistory() is a hook function which comes from "react-router-dom"
    // on calling useHistory(), we get history object ,using this object we can navigate to different UI. 

    let state = useSelector((state) => state);

    return (
        <>
            <div className="product-container">
                { 
                   state.map((el, index) => ( <Product key={index} data={el}/> )) 
                }
            </div>

            <button onClick={ () => { history.push("/cart"); }} className="shopping-cart-home">
                  <span class="material-icons">shopping_cart</span>
            </button>
        </>
    );
}

export default Home;