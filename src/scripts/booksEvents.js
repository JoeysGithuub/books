const bookData = require("./booksDatabaseHandler")
const bookPrinter = require("./booksPrint")
const $ = require("jquery")


$("#book-container").on("click", "#submit-butt", () => {
    const bookShelfInput = $("#bookShelf-input").val()
    const summaryInput = $("#summary-input").val()
    const pagesInput = $("#pages-input").val()
    const newBooks = {
        Book: bookShelfInput,
        Summary: summaryInput,
        Pages: pagesInput,
    }
    bookData.postBooks(newBooks)
        .then((booksInfo) => {
            $("#bookshelf-input").val("")
            $("#summary-input").val("")
            $("#pages-input").val("")
            console.log(booksInfo)
            return bookData.getAllBooks()
        })
        .then(booksArray => {
            bookPrinter.printBooks(booksArray)
        })
})
$("#bookBox").on("click", ".delete-butt", () => {
    const bookID = $(event.target).parent().attr("id")
    bookData.deleteBooks(bookID)
        .then(() => {
            return bookData.getAllBooks()
        })
        .then((booksArray) => {
            bookPrinter.printBooks(booksArray)
        })
})

