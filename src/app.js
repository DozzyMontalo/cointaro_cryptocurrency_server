require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
const userRouter = require("./routers/user");
const adminRouter = require("./routers/admin");
const balanceRouter = require("./routers/balance");
const transactionRouter = require("./routers/transaction");
const notificationRouter = require("./routers/notification");
const swapRouter = require("./routers/swap");
const taskRouter = require("./routers/task");
const limiter = require("./routers/swap");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(userRouter);
app.use(adminRouter);
app.use(balanceRouter);
app.use(transactionRouter);
app.use(notificationRouter);
app.use(taskRouter);
app.use(swapRouter);
app.use("/swap", limiter);

module.exports = app;

console.log(process.env.PORT);
console.log(process.env.MONGODB_URL)
