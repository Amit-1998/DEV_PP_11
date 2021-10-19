const mongoose = require('mongoose');
// const db_link = 'mongodb+srv://AmitfoodApp:<password>@cluster0.lwgl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const db_link = 'mongodb+srv://AmitfoodApp:SeeBa5L6SDwmEHiR@cluster0.lwgl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const { db_link } = require('../secrets');
// copied password => SeeBa5L6SDwmEHiR

const validator = require("email-validator");

mongoose.connect(db_link).then(function(db){
    // console.log(db);
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: function(){
            return validator.validate(this.email);
        }
    },

    // createdAt: Date,
    createdAt: {
        type: Date
    },

    password: {
        type: String,
        required: true,
        min: 8
    },

    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        validate: function(){
            return this.password==this.confirmPassword;
        }
    }

});

userSchema.pre('save', function(){
    this.confirmPassword = undefined;
});

const userModel = mongoose.model('userModel', userSchema);

// module.exports{
//     userModel: userModel
// }

// shorthand of above is
module.exports = userModel;

/* ab hame is creteUser function ki zarroorat nhi kuki ham signupuser mein d=sab kuch likh chuke*/ 
// (async function createUser(){
//     let user={
//         name: 'Abhi',
//         age: 20,
//         email: 'abc@gmail.com',
//         password: '12345678',
//         confirmPassword: '12345678'
//     };
// //    let userObj = await userModel.create(user); ye line jayegi signupUser function 
//    console.log(userObj);
// })();