const express = require("express");
const cors = require("cors");
const path = require("path");
const colors = require("colors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bookRoute = require("./routes/books");
app.use("/api/books", bookRoute);


//heroku config...//
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`.green.bold);
})