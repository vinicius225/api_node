const mongoouse = require("mongoose");
const { Schema } = mongoouse;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoouse.model("User", UserSchema);

module.exports = User;
