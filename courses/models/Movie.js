const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    rating: {type: Number, required: true},
    genre: {type: [String], required: true},
    price: {type: Number, required: true},
    description : {type: String, required: true},
    people : {type : String ,required: true},
    users : {type : Number , required : true},
    features : {type : [String],reqiured : true},
    hour: {type : Number,required : true},
    articles : {type : Number , required : true}
});

module.exports = mongoose.model("movie", movieSchema);