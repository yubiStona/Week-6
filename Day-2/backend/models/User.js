const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

//hash password befoe saving to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified(this.password)) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
