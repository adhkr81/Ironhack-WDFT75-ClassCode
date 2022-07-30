const express = require("express");
require("dotenv").config();

require("./config/db.config")();

const app = express();

app.use(express.json());

const userRouter = require("./routes/users.routes");
app.use("/user", userRouter);

const memoryRouter = require("./routes/memories.routes");
app.use("/memory", memoryRouter);

const albunsRouter = require("./routes/albuns.routes");
app.use("/album", albunsRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
