import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./preview.css";

let Preview = ()=>{

    let { id } = useParams();
    // console.log(value);
    let state = useSelector(state=>state);
    let reqObject = state[id];
    console.log(reqObject);
    
    return (
        <>
          <div className="preview-container">
                <div className="preview-img-container">
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/71sxlhYhKWL._AC._SR360,460.jpg"  />
                </div>    
                
                <div className="preview-listing">
                    <h2>Title</h2>
                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                    </p>
                    <button>Add to Cart</button>
                </div>
          </div>
        </>
    );
}

export default Preview;