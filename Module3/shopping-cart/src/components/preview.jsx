import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./preview.css";
import { addCreator } from "../redux/actions";


let Preview = ()=>{

    let { id } = useParams();
    // console.log(value);
    let state = useSelector(state=>state);
    let reqObject = state[id];
    console.log(reqObject);

    let dispatch = useDispatch();
    
    return (
        <>
          <div className="preview-container">
                <div className="preview-img-container">
                    <img src={reqObject.img}  />
                </div>    
                
                <div className="preview-listing">
                    <h2>{ reqObject.name }</h2>
                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                    </p>
                    <button onClick={()=>{ dispatch(addCreator(reqObject.id)) }}>Add to Cart</button>
                </div>
          </div>
        </>
    );
}

export default Preview;