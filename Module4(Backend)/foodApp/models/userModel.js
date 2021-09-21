const mongoose = require('mongoose');
// const db_link = 'mongodb+srv://AmitfoodApp:<password>@cluster0.lwgl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const db_link = 'mongodb+srv://AmitfoodApp:SeeBa5L6SDwmEHiR@cluster0.lwgl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// copied password => SeeBa5L6SDwmEHiR

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

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    confirmPassword: {
        type: String,
        required: true,
        unique: true
    }

});