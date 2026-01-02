const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contacts", require("./routes/contact.routes"));

module.exports = app;
