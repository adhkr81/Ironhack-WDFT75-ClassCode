const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);

    console.log("Conected to db:", dbConnection.connection.name);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
