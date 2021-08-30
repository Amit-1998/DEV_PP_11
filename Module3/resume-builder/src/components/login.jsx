import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

let Login = () => {

    let history = useHistory();
    let user = useSelector( (state)=>state);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    return (
        <>
        
            {user ? <Redirect to="/home" /> : "" }
            <div className="row">
                <div className="col-4 offset-4">
                    <h1 className="mt-4 mb-4">Login</h1>
                    <form className="mt-5">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" value={email} onChange={(e)=>{ setEmail(e.currentTarget.value); }} id="exampleInputEmail1" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" value={password} onChange={(e)=>{ setPassword(e.currentTarget.value); }} id="exampleInputPassword1" />
                        </div>

                        <button onClick={(e)=>{
                            e.preventDefault();
                            auth.signInWithEmailAndPassword(email, password);
                           
                        }} class="btn btn-primary">Login</button>
                        <br />
                        <br />

                        <button onClick={()=>{ history.push("/signup"); }} class="btn btn-primary">SignUp</button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;