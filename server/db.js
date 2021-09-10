const mongoose = require ("mongoose");
const dbConnectionURI = require('./config/keys').mongoURI || 'mongodb://user:password@localhost:27017/quiz-app?authSource=admin'

//connecting to the database
mongoose
  .connect(dbConnectionURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected.....'))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

module.exports = mongoose.connection