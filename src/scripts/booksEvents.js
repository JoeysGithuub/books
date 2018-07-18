const bookData = require("./booksDatabaseHandler")
const booksForm = require("./booksBuilder")
const bookPrinter = require("./booksPrint")
const $ = require("jquery")

$("#bookShelf").on("click", "#add-butt", () => {
    const bookTitleInput = $("#bookTitle-input").val();
    console.log(bookTitleInput)
    const bookSummaryInput = $("#bookSummary-input").val();
    console.log(bookSummaryInput)
    const bookPagesInput = $("#bookPages-input").val();
    console.log(bookPagesInput)
    const newBook = {
        title: bookTitleInput,
        summary: bookSummaryInput,
        pages: bookPagesInput,
        finished: false
    }

    console.log(bookData);


    bookData.postBook(newBook)
        .then((bookInfo) => {
            $("#bookTitle-input").val("").attr("placeholder", "Book Title");
            $("#bookSummary-input").val("").attr("placeholder", "Summary");
            $("#bookPages-input").val("").attr("placeholder", "Pages You Have Read");
            return bookData.getAllBooks()
        })
        .then(bookArray => {
            bookPrinter.printBooks(bookArray)
        })
})

$("#book-box").change(event => {
    if (event.target.className === "checkbox-butt") {
        bookData.readBook(event.target.parentNode.id)
            .then((response) => {
                if (response.read === "true") {
                    let clearCard = event.target.parentNode
                    clearCard.style.display = "none"
                }
            })
    }
})

$("#book-box").on("click", ".edit-butt", () => {
    console.log("hello", $(".edit-butt"))
    updateBookID = $(event.target).parent().attr("id")
    bookData.getBook(updateBookID)
        .then((response) => {
            console.log("response", response)
            $("#bookTitle-input").val(response.title)
            $("#bookSummary-input").val(response.summary)
            $("#bookPages-input").val(response.pages)
        })
})

$("#book-box").on("click", ".update-butt", () => {
    const bookTitleInput = $("#bookTitle-input").val();
    const bookSummaryInput = $("#bookSummary-input").val();
    const bookPagesInput = $("#bookPages-input").val();
    const updateBooks = {
      title: bookTitleInput,
      summary: bookSummaryInput,
      pages: bookPagesInput,
    }
    bookData.putBook(updateBooks)
    .then(() => {
      return bookData.getAllBooks()
    })
    .then((bookArray) => {
      bookPrinter.printBooks(bookArray)
    })
  })

  console.log($(".update-butt"))

$("#book-box").on("click", ".delete-butt", () => {
    const bookID = $(event.target).parent().attr("id")
    bookData.deleteBook(bookID)
        .then(() => {
            return bookData.getAllBooks()
        })
        .then((bookArray) => {
            bookPrinter.printBooks(bookArray)
        })
})


