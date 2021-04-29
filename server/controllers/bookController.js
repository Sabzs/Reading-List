const { Books } = require("../models");

//Post new Item/==//
const addBook = async ({ body }, res, next) => {
  try {
    const { title, author } = body;
    const newBook = await Books.create({ title, author });
    return res.status(201).json({ newBook });
  } catch (err) {
    console.log(err)
    return next(new Error(err));
  }
};

const getBooks = async (req, res, next) => {
  try {
    const getbooks = await Books.findAll();
    return res.status(200).json({ getbooks });
  } catch (err) {
    console.log(err);
    return next(new Error(err));
  }
}

const editBook = async ({ body, params }, res, next) => {
  try {
    const book = await Books.findOne({ where: { id: params.id } });
    if (!book) {
      return res.status(400).json({ error: "Book Id not found" });
    }
    const editedBook = await Books.update({
      title: body.title,
      author: body.author
    },
      { where: { id: book.id } }
    )
    return res.status(200).json({ editedBook, message: "Book Successfully updated!" })
  } catch (err) {
    console.log(err);
    return next(new Error(err));
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedBook = await Books.findByPk(id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book Id not found" });
    };
    await deletedBook.destroy();
    return res.status(200).json({ message: "Book successfully deleted" });
  } catch (err) {
    console.log(err);
    return next(new Error(err));
  }
}


module.exports = {
  addBook,
  getBooks,
  editBook,
  deleteBook
}