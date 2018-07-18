const bookData = require("./booksDatabaseHandler")
const booksForm = require("./booksBuilder")
const bookPrinter = require("./booksPrint")
const $ = require("jquery")

//add button click event

$("#bookShelf").on("click", "#add-butt", () => {
    const bookTitleInput = $("#bookTitle-input").val();
    const bookSummaryInput = $("#bookSummary-input").val();
    const bookPagesInput = $("#bookPages-input").val();
    const newBook = {
        title: bookTitleInput,
        summary: bookSummaryInput,
        pages: bookPagesInput,
    }

    console.log(bookData);

    //post book function

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

//checkbox read function

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

//edit button function

let updateBookID;

$("#book-box").on("click", ".edit-butt", () => {
    // console.log("hello", $(".edit-butt"))
    updateBookID = $(event.target).parent().attr("id")
    // console.log("#updateBookID")
    bookData.getBook(updateBookID)
        .then((response) => {
            console.log("response", response)
            $("#bookTitle-input").val(response.title)
            $("#bookSummary-input").val(response.summary)
            $("#bookPages-input").val(response.pages)
        })
})

//update function


$("#book-box").on("click", ".update-butt", () => {
    const bookTitleInput = $("#bookTitle-input").val();
    const bookSummaryInput = $("#bookSummary-input").val();
    const bookPagesInput = $("#bookPages-input").val();
    const updateBook = {
      id: updateBookID,
      title: bookTitleInput,
      summary: bookSummaryInput,
      pages: bookPagesInput,
    }
    bookData.putBook(updateBook)
    .then(() => {
        return bookData.getAllBooks()
    })
    .then((bookArray) => {
      bookPrinter.printBooks(bookArray)
    })
  })

//   console.log($(".update-butt"))

  //delete button function

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


