const { mongoose } = require("mongoose");

const planSchema = new mongoose.Schema({
    id: { 
       type: Number,
       required: true
    },

    name: {
        type: String,
        required: true
    },

    ratings:{
        type: Number,
        required: true
    },

    price:{
        type: Number,
        required: true
    },
    
    delivery:{
        type: Boolean,
        required: true
    },

    meals: {
       type: Number,
       required: true
    },

    description: {
        type: String,
        required: true
    },
});