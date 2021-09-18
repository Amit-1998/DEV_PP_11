// postman par request methods ke liye

const express = require('express');
const app = express();

app.listen('5000', function () {
    console.log('server listening on port 5000');
});

app.use(express.json()); // use this line before using any kind of requests //  to recognize the incoming Request Object as a JSON Object
app.use(express.static('public'));

// make router in express
const userRouter = express.Router(); // user ke liye ek specific router bna diya user ka router
// ab router bna liya
const authRouter = express.Router();
// '/user' is a base route
app.use('/user', userRouter); // hamne app ko bola ki tu by default '/user' vaala route lele 
// useRouter se jab mein route banaunga to unse pehle '/user' automatic lga hoga and then baad mein forw slash userRouter lga sdega aisa'/user/' and then aage ka route 
// ab router par jitne bhi hmare routes hai ab vo specific karenge
app.use('/auth', authRouter);


// mounting in express => sabhi routes ko mount kar liya hai
userRouter.route('/')
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);

// userRouter.route('/:id')
//     .get(getUserById)

authRouter.route('/signup')
.post(signupUser)

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


// app.get('/user', getUser); // getUser is a callback function
function getUser(req, res) {
    res.json(user);
}

// pehle aise likha the
// app.get('/user', (req, res)=>{
//     // res.send('user');
//     res.json(user); // json format mein data mangvaaya server se
// });

// app.post('/user', createUser);
function createUser(req, res) {
    user = req.body; // server ke paas req object mein milta hai data jo frontend se client ne bheja hota hai
    // console.log(req.body);
    res.send('data has been added successfully'); // server se client par message bhejne ke liye res.send()
}

//pehle aise likha the

// post request -> koi bhi data bhejne ke liye we use post request 
// client -> server (when client sends data to the server )
// app.post('/user', (req, res)=>{
//     user = req.body; // server ke paas req object mein milta hai data jo frontend se client ne bheja hota hai
//     // console.log(req.body);
//     res.send('data has been added successfully'); // server se client par message bhejne ke liye res.send()

// });

// app.patch('/user', updateUser);
function updateUser(req, res) {
    // user = req.body;
    // console.log(user); // { age: '10' }
    let obj = req.body; // { age: '10' }
    for (let key in obj) {
        user[key] = obj[key]; // vo key(age) user mein ban jayegi
        // key is age
        // object[key] => 10
        // user[key] ye dekhega ki mere paas to "key" as a key to hai hi nhi to vo sochega acha ye koi variable hai jisme "age" hai to apne ander "age" ko as a key dekhega vo bhi nhi milega to bna dega
    }
    // res.send("data has been updated successfully");
    res.json(user); // {"name":"Amit Kumar","age":"10"}
}

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

// app.delete('/user', deleteUser);
function deleteUser(req, res) {
    user = {};
    res.json(user);
}


// pehle aisa likha the
// delete request -> used to delete the user
// app.delete('/user', (req, res)=>{
//     user = {};
//     res.json(user);
// });

// param route
// req.params => ismein object aata hai
// iska route thoda alag hai to iske liye alag router banega
// app.get('/user/:id', getUserById);
function getUserById(req, res) { // req object mein parameters aayenge url ke
    console.log(req.params); // {"id":"1998"}
    res.send(req.params.id); // 1998
    // res.json(req.params.id); // "1998"
}

function signupUser(req, res) {
    // let userDetails = req.body;
    // let name = userDetails.name;
    // let email = userDetails.email;
    // let password = userDetails.password;

    let { name, email, password } = req.body;
    user.push({ name, email, password });

    console.log('user', req.body);
    res.json({
        message: 'user signedUp',
        user: req.body
    });
}



// Key points : 
// yha par React jaise routes nhi hote
// ye exact match karte hai automatically chahe order kaise bhi ho