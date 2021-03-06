// postman par request methods ke liye

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser()); // req ke obj mein cookies ko populate kra deta hai// cookies ko available kra deta hai puri application mein, also it is a middleware function sabse upar likha hai to sabse pehle chalega 

app.listen('5000', function () {
    console.log('server listening on port 5000');
});

app.use(express.json()); // use this line before using any kind of requests //  to recognize the incoming Request Object as a JSON Object

// app.use((req,res,next)=>{
//     // do some work
//     console.log('I am a middleware');
//     next();
// });


app.use(express.static('public'));

// make router in express
//const userRouter = express.Router(); // user ke liye ek specific router bna diya user ka router
const userRouter = require('./Routers/userRouter');

// ab router bna liya
// const authRouter = express.Router();
const authRouter = require('./Routers/authRouter');

// app.use((req,res,next)=>{
//     // do some work
//     console.log('I am a middleware 2nd time');
//     next();
// });

// '/user' is a base route
app.use('/user', userRouter); // hamne app ko bola ki tu by default '/user' vaala route lele 
// useRouter se jab mein route banaunga to unse pehle '/user' automatic lga hoga and then baad mein forw slash userRouter lga sdega aisa'/user/' and then aage ka route 
// ab router par jitne bhi hmare routes hai ab vo specific karenge
app.use('/auth', authRouter);


// mounting in express => sabhi routes ko mount kar liya hai
// userRouter.route('/')
//     .get(getUser)
//     .post(createUser)
//     .patch(updateUser)
//     .delete(deleteUser);

// app.get('/user', getUser); // getUser is a callback function
// function getUser(req, res) {
//     console.log("get User called");
//     res.json(user);
// }

// app.post('/user', createUser);
// function createUser(req, res) {
//     user = req.body; // server ke paas req object mein milta hai data jo frontend se client ne bheja hota hai
//     // console.log(req.body);
//     res.send('data has been added successfully'); // server se client par message bhejne ke liye res.send()
// }

// app.patch('/user', updateUser);
// function updateUser(req, res) {
//     // user = req.body;
//     // console.log(user); // { age: '10' }
//     let obj = req.body; // { age: '10' }
//     for (let key in obj) {
//         user[key] = obj[key]; // vo key(age) user mein ban jayegi
//         // key is age
//         // object[key] => 10
//         // user[key] ye dekhega ki mere paas to "key" as a key to hai hi nhi to vo sochega acha ye koi variable hai jisme "age" hai to apne ander "age" ko as a key dekhega vo bhi nhi milega to bna dega
//     }
//     // res.send("data has been updated successfully");
//     res.json(user); // {"name":"Amit Kumar","age":"10"}
// }

// app.delete('/user', deleteUser);
// function deleteUser(req, res) {
//     user = {};
//     res.json(user);
// }

// param route
// req.params => ismein object aata hai
// iska route thoda alag hai to iske liye alag router banega
// app.get('/user/:id', getUserById);
// function getUserById(req, res) { // req object mein parameters aayenge url ke
//     console.log(req.params); // {"id":"1998"}
//     res.send(req.params.id); // 1998
//     // res.json(req.params.id); // "1998"
// }

// app.use((req,res,next)=>{
//         // do some work
//         console.log('I am a middleware 2nd time');
//         next();
// });

// userRouter.route('/:id')
// .get(getUserById);

// authRouter.route('/signup')
// .post(setCreatedAt, signupUser); // setCreatedAt is a middleware which runs before signupUser

// middleware function
// function setCreatedAt(req,res,next){
//     let obj = req.body;
//     // keys ka arr -> uska length
//     let length = Object.keys(obj).length; // Obj ki keys lekar aao jo ki hame ek array dega uski length nikal lo
//     if(length==0){
//         return res.status(400).json({message: "cannot create user if req.body is empty"});
//     }
//     req.body.createdAt = new Date().toISOString();
//     next();
// }

// const userModel = require('./models/userModel');

// async function signupUser(req, res) {
//     // let userDetails = req.body;
//     // let name = userDetails.name;
//     // let email = userDetails.email;
//     // let password = userDetails.password;
//     try{
//         // let { name, email, password } = req.body; ab aise nhi nikalenge
//         let userObj = req.body; // user ka data frontend se aayega
//         // user.push({ name, email, password });
//         // ab se put all data in mongo db
//         let user = await userModel.create(userObj);
//         // console.log('user', req.body);
//         res.json({
//             message: 'user signedUp',
//             user: userObj
//         });
//     }
//     catch(err){
//         console.log(err);
//         res.json({message: err.message});
//     }
// }

// authRouter.route('/forgetPassword')
// .get(getForgetPassword)
// .post(postForgetPassword, validateEmail); // postForgetPassword iske andar next() call par agla middleware function i.e validateEmail hamne saath mein hi pass kar dia 

// function getForgetPassword(req, res){
//     res.sendFile('./public/forgetPassword.html', {root:__dirname});
// }

// function postForgetPassword(req, res,next){
//    let data = req.body;
//    console.log('data', data);
//    // check if emailid is correct - validate(emailid hi di hai ya kuch bhi likh dia)
//    next(); // next middleware function par jao

//    // check if user exists in db
//    // so response bhejne se pehle hame ek check lgana hoga
// //    res.json({
// //        message: "data received",
// //        data: data.email
// //    })
// }

// function validateEmail(req, res){
//    // req.body mein vhi aata hai jo postForgetPassword ki req.body mein aata hai
//    console.log("in validateEmail function");
//    console.log(req.body);
//    // how to check if email is correct or not -> @ , .
//     res.json({
//           message: "data received",
//           data: req.body
//        })
// }

// redirects
app.get('/user-all',(req,res)=>{
    res.redirect('/user');
});

// middleware function 
// isko sab routers ke  last mein likho
// 404 page
app.use((req, res)=>{ // middleware function -> which runs everytime top to bottom (jab given route on browser nhi mila to ye chal jayega)
        res.sendFile('public/404.html',{root:__dirname})
});




// let user = {};
let user = [];

// hamesha client ke perspective se dekho

// C.R.U.D operations = create, read, update and delete
// 1) Create by post request
// 2) Read by get request
// 3) Update by patch request
// 4) delete by delete request 

// get request => when client data mangvaata hai server se
// client <- server
app.get('/', (req, res) => {
    res.send('Home Page');
});


// pehle aise likha the
// app.get('/user', (req, res)=>{
//     // res.send('user');
//     res.json(user); // json format mein data mangvaaya server se
// });



//pehle aise likha the

// post request -> koi bhi data bhejne ke liye we use post request 
// client -> server (when client sends data to the server )
// app.post('/user', (req, res)=>{
//     user = req.body; // server ke paas req object mein milta hai data jo frontend se client ne bheja hota hai
//     // console.log(req.body);
//     res.send('data has been added successfully'); // server se client par message bhejne ke liye res.send()

// });



// pehle aise likha the
// patch request method -> koi bhi chis update karne ke liye client -> server
// app.patch('/user', (req, res)=>{
//       // user = req.body;
//       // console.log(user); // { age: '10' }
//       let obj = req.body; // { age: '10' }
//       for(let key in obj){
//           user[key] = obj[key]; // vo key(age) user mein ban jayegi
//           // key is age
//           // object[key] => 10
//            // user[key] ye dekhega ki mere paas to "key" as a key to hai hi nhi to vo sochega acha ye koi variable hai jisme "age" hai to apne ander "age" ko as a key dekhega vo bhi nhi milega to bna dega
//       }
//       // res.send("data has been updated successfully");
//       res.json(user); // {"name":"Amit Kumar","age":"10"}
// });

// rough work
// let user = {name: "Amit"};
// let object = {age: "10"};

// for(let key in object){
//     user[key] = object[key];
//     // key is age
//     // object[key] => 10
//     // user[key] ye dekhega ki mere paas to "key" as a key to hai hi nhi to vo sochega acha ye koi variable hai jisme "age" hai to apne ander "age" ko as a key dekhega vo bhi nhi milega to bna dega
// }




// pehle aisa likha the
// delete request -> used to delete the user
// app.delete('/user', (req, res)=>{
//     user = {};
//     res.json(user);
// });







// Key points : 
// yha par React jaise routes nhi hote
// ye exact match karte hai automatically chahe order kaise bhi ho