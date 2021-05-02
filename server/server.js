const express = require("express");
const cors = require("cors");
const colors = require("colors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bookRoute = require("./routes/books");
app.use("/api/books", bookRoute);

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`.green.bold);
})