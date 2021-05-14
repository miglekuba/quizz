const mongoose = require ("mongoose");
const db = require('./config/keys').mongoURI

//connecting to the database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected.....'))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

module.exports = mongoose.connection