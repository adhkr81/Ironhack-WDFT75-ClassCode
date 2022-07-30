const mongoose = require("mongoose");

async function connection() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to db:", dbConnection.connection.name);
  } catch (err) {
    console.error(err);
  }
}

module.exports = connection;
