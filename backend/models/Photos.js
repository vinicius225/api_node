const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema(
    {
        image: String,
        title: String,
        likes: Array,
        coments: Array,
        userId: mongoose.isObjectIdOrHexString,
        username:String
    },
    {
        timestamps : true
    }
);

const Photo = mongoouse.model("User", photoSchema);

module.exports = Photo;
