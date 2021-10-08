function createElement(elementModel){ // high-level function which uses or takes model
    // async function vaala tabhi chalega jab ise call lagegi yha se .post(bodyChecker, isAuthorized(["admin"]), createUser) 
    return async function(req, res){
        try{
           let element = await elementModel.create(req.body);
           res.status(200).json({
               element: element
           })
        }
        catch(err){
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    }
}

function getElement(elementModel){
    return async function(req, res){
        let { id } = req.params;
        try{
            let element = await elementModel.findById(id);
            // console.log(user);
            res.status(200).json({
                "message": user
            })
        }
        catch(err){
            res.status(502).json({
                message: err.message
            })
        }
    }
}

function getElements(elementModel){
    return async function(req, res) {
        try {
            let elements = await elementModel.find();
            res.status(200).json({
                "message": users
            })
        } catch (err) {
            res.status(502).json({
                message: err.message
            })
        }
    }
}

function updateElement(elementModel){
    return async function(req, res){
        let { id } = req.params;
        try{
            // ham password & confirm Password nhi  update  krvana chahenge through updateUser
            if (req.body.password || req.body.confirmPassword) {
                return res.json({
                    message: "use forget password instead, to update p & cP"
                })
            }
           let element = await elementModel.findById(id);
           if(element){
               for(let key in user){
                   element[key] = req.body[key];
               }
               // save -> confirm, password
               // [options.validateBeforeSave] «Boolean» set to false to save without validating.
               // validateBeforeSave: false krane se jo schema mein hamne required: true kra hai and jo email ko validaate function diye ye sab chise ko run or check nhi karega unhe rokega validate karne se
               // schema mein jo pre('save') likha use bhi nhi chalne dega
               await element.save({
                   validateBeforeSave: false
               });
               res.status(200).json({
                   element: element
               });
            }
           else{
              res.status(404).json({
                  message: "user not found"
              })  
           }
        } 
        catch(err){
             console.log(err);
             res.status(500).json({
                 message: "Server error"
             });
        }
    }
}

function deleteElement(elementModel){
    return async function(req, res){
        let { id } = req.params;
        try{
           let element = await elementModel.findByIdAndDelete(id);
           res.status(200).json({
               element: element
           });
        }
        catch(err){
            console.log(err);
            req.status(500).json({
                message: "Server error"
            });
        }
   }
}