const mongoose = require('mongoose');

const connectDB = async () => {
  console.log("Hello");
  try {
    mongoose.connect('mongodb+srv://jeethait2222:rUeu8gqAuSBdv0fQ@cluster0.l2jwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(res => console.log("DB CONNECTED"))
        .catch(err => console.log("DB NOT CONNECTED"));
}
catch (error) {
    console.log("DB NOT CONNECTED DUE TO SOME ISSUE");
}
};

module.exports = connectDB;