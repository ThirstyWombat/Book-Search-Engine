const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://me:AtLeast1Letter@googlebooks.pdkvlmi.mongodb.net/googlebooks"
);

module.exports = mongoose.connection;
