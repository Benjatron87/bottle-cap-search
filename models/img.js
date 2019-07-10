let mongoose = require("mongoose");

let imagesSchema = mongoose.Schema({
    image : {
        type : String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }

});

let Image = mongoose.model("Image", imagesSchema);

module.exports = Image;