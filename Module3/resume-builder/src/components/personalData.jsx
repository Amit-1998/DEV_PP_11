import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { detailCreator } from "../redux/actions/detailsActions";
import "./css/form.css";
import Preview from "./preview";

let PersonalData = ()=>{

    let details = useSelector(state=>state.details); // take out the details state from state. 
    // console.log(details);

    let {fname, lname, email, phone, city, state} = details;
    let dispatch = useDispatch();
    let history = useHistory();

    return (
        <>
                <div className="personal-container">
                     <div className="personal-form">
                            <h2 className="m-4">Personal Details</h2>
                            <div class="row m-3">
                                    <div class="col-5">
                                        <input type="text" value = {fname} onChange={(e)=>{ dispatch(detailCreator({ fname: e.currentTarget.value})) }} class="form-control" placeholder="First name" />
                                    </div>

                                    <div class="col-5">
                                        <input type="text" value={lname} onChange={(e)=>{ dispatch(detailCreator({ lname: e.currentTarget.value})) }} class="form-control" placeholder="Last name" />
                                    </div>
                            
                                    <div class="col-5">
                                        <input type="email" value={email} onChange={(e)=>{ dispatch(detailCreator({ email: e.currentTarget.value})) }} class="form-control" placeholder="Email" />
                                    </div>
                            
                                    <div class="col-5">
                                        <input type="number" value={phone} onChange={(e)=>{ dispatch(detailCreator({ phone: e.currentTarget.value})) }} class="form-control" placeholder="Phone" />
                                    </div>

                                    <div class="col-5">
                                        <input type="text" value={city} onChange={(e)=>{ dispatch(detailCreator({ city: e.currentTarget.value})) }} class="form-control" placeholder="City" />
                                    </div>

                                    <div class="col-5">
                                        <input type="text" value={state} onChange={(e)=>{ dispatch(detailCreator({ state: e.currentTarget.value})) }} class="form-control" placeholder="State" />
                                    </div>

                            </div>
                         
                             <button onClick={()=>{ history.push("/qualifications"); }} className="btn btn-primary m-4">Next</button>
                     </div>
                
                     <Preview />
            </div>
        </>
    );
}

export default PersonalData;