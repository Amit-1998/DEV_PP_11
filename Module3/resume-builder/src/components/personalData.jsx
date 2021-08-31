import "./css/personal.css";
import Preview from "./preview";

let PersonalData = ()=>{
    return (
        <>
                <div className="personal-container">
                     <div className="personal-form">
                            <h2 className="m-4">Personal Details</h2>
                            <div class="row m-3">
                                    <div class="col-5">
                                        <input type="text" class="form-control" placeholder="First name" />
                                    </div>

                                    <div class="col-5">
                                        <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
                            
                                    <div class="col-5">
                                        <input type="email" class="form-control" placeholder="Email" />
                                    </div>
                            
                                    <div class="col-5">
                                        <input type="number" class="form-control" placeholder="Phone" />
                                    </div>

                                    <div class="col-5">
                                        <input type="text" class="form-control" placeholder="City" />
                                    </div>

                                    <div class="col-5">
                                        <input type="text" class="form-control" placeholder="State" />
                                    </div>

                            </div>
                         
                             <button className="btn btn-primary m-4">Next</button>
                     </div>
                
                     <Preview />
            </div>
        </>
    );
}

export default PersonalData;