const mongoose = require('mongoose');
// const db_link = 'mongodb+srv://AmitfoodApp:<password>@cluster0.lwgl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const db_link = 'mongodb+srv://AmitfoodApp:SeeBa5L6SDwmEHiR@cluster0.lwgl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// copied password => SeeBa5L6SDwmEHiR

const validator = require("email-validator");

mongoose.connect(db_link).then(function(){
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
    }

    email: {
        type: String,
        required: true,
        unique: true,
        validate: function(){
            return validator.validate(this.email);
        }
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