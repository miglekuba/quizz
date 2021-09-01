const mongoose = require("mongoose");
const {isEmail} = require('validator');
const uuid = require("uuid");
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const User = new Schema(
  {
    // id: { type: String, required: true, default: uuid.v4 },
    email: { 
      type: String,
      required: [true, 'Please enter email'],
      unique: true, 
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email']
    },

    password: { type: String, required: [true, 'Please enter the password'] },
    role: { type: String, enum: ["ADMIN", "READ_ONLY_USER", "LIMITED_USER"] },
  },
  { timestamps: true }
);

User.post('save', function(doc, next) {
console.log('new user was created and saved', doc)
next()
})

//fire a funciton after doc saved to db
User.pre('save', async function(next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next();
})
User.statics.login = async function(email,password){
  const user = await this.findOne({email});
  if (user){
      const auth = await bcrypt.compare(password, user.password) //comparing hashed password in the db with the one that user logged in
      if (auth) {
          return user
      }
      throw Error('incorrect password')
  }
  throw Error('incorrect email')
}


module.exports = mongoose.model("User", User, "users");
