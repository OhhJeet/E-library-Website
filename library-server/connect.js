const mongoose = require('mongoose');

const connectDB = async () => {
  console.log("Hello");
  try {
    mongoose.connect('mongodb+srv://E-library-User:tluYUYIxIXrreZ5f@loopedin.7kx04.mongodb.net/E-Library?retryWrites=true&w=majority&appName=LoopedIn')
        .then(res => console.log("DB CONNECTED"))
        .catch(err => console.log("DB NOT CONNECTED"));
}
catch (error) {
    console.log("DB NOT CONNECTED DUE TO SOME ISSUE");
}
};

module.exports = connectDB;