const bookFormBuilder = require("./booksBuilder")
const bookPrinter = require("./booksPrint")
const $ = require("jquery")

bookFormBuilder.buildBookShelf()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/books")
    .then((books) => {
        bookPrinter.printBooks(books)
    })
}

printOnPageLoad()


