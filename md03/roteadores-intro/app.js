const express = require("express");

const app = express();

app.use(express.json());

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

const addressRouter = require("./routes/address.routes");
app.use("/address", addressRouter);

app.listen(4001, () => {
  console.log("Server up and running at port 4001.");
});
