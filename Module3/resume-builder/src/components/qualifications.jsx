import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { detailCreator } from "../redux/actions/detailsActions";
import Preview from "./preview";
import "./css/form.css"
import { useSelector } from "react-redux";

import { saveResume } from "../redux/actions/saveActions";

let Qualifications = () => {

    let history = useHistory();
    let dispatch = useDispatch();
    let { degree, cgpa, year, college, isPublic } = useSelector((state) => state.details);

    let {id} = useSelector((state)=>state.saveState);

    // I have to extract uid,details,code for dispatching special function
    let details = useSelector((state)=>state.details);
    let code = useSelector((state)=>state.template);
    let { uid } = useSelector((state)=>state.user);


    return (
        <>
            <div className="qual-container">
                <div className="qual-form">
                    <h2 className="m-4">Professional Details</h2>
                    <div class="row m-3">
                        <div class="col-5">
                            <input type="text" value={degree  /*store mein jo value hai vo "value" mein lelo*/} onChange={(e) => { dispatch(detailCreator({ degree: e.currentTarget.value })) }} class="form-control" placeholder="Degree" />
                        </div>

                        <div class="col-5">
                            <input type="text" value={college} onChange={(e) => { dispatch(detailCreator({ college: e.currentTarget.value })) }} class="form-control" placeholder="College" />
                        </div>

                        <div class="col-5">
                            <input type="number" value={cgpa} onChange={(e) => { dispatch(detailCreator({ cgpa: e.currentTarget.value })) }} class="form-control" placeholder="CGPA" />
                        </div>

                        <div class="col-5">
                            <input type="number" value={year} onChange={(e) => { dispatch(detailCreator({ year: e.currentTarget.value })) }} class="form-control" placeholder="Year of Graduation" />
                        </div>

                        <div class="form-check m-4">
                            <input checked={isPublic} onClick={(e)=>{ dispatch(detailCreator({isPublic: e.currentTarget.checked})); }} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Make Public
                            </label>
                        </div>

                    </div>

                    <button onClick={() => { history.push("/personal"); }} className="btn btn-primary m-4">Back</button>
                </div>

                <Preview />
            </div>

            <button onClick={()=>{ alert(`localhost:3000/publicpreview/${id}`); }} className="btn btn-primary qual-gen">Generate Link</button>
            <button onClick={()=>{ dispatch(saveResume(uid, details, code)); }} className="btn btn-primary qual-save">Save To Database</button>
        </>
    );
}

export default Qualifications;
