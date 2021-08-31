import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = ()=>{

    let {fname, lname, city, state, email, phone, cgpa, college, degree, year}  = useSelector((state)=>state.details);
    let templateCode = useSelector((state)=>state.template);
    
    
    return (
        <>
            <div className="preview-container">
            
            </div>

        </>
    );
}

export default Preview;