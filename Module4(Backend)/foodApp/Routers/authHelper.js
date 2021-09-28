const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../secrets');

// let flag = true; // consider initially user is loggedin
function protectRoute(req,res,next){

    try{  // no need to have a flag
        // now user is loggedIn & now he wants to get()
        if(req.cookies.login){
            console.log(req.cookies);
            let isVerified = jwt.verify(req.cookies.login, JWT_KEY);
            if(isVerified){
                next(); // user is already loggedIn so he can see the users info call to next middleware function
            }
            else{
                res.json({
                    message: "Not Authorized"
                });
            }
        }
        else{
            res.json({
                message: "Operation not allowed"
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
}

module.exports = protectRoute;