const express = require("express");
const booksController = require("../controllers/bookController")

const router = express.Router();


router.post("/newbook", booksController.addBook);
router.get("/getbooks", booksController.getBooks);
router.put("/updatebook/:id", booksController.editBook);
router.delete("/deletebook/:id", booksController.deleteBook);


module.exports = router;
