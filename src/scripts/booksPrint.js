const $ = require("jquery")

const bookPrinter = Object.create({}, {
    printBooks: {
        value: function(booksArray) {
            $("#bookBox").empty();
            booksArray.forEach((books) => {
                const $booksDiv = $("<div>").attr("id", books.id)
                $("<h4>").text(books.Book).appendTo($booksDiv)
                $("<p>").text(books.Summary).appendTo($booksDiv)
                $("<p>").text(books.Pages).appendTo($booksDiv)
                $("<button>").text("Log Book").addClass("#submit-butt").appendTo($booksDiv)
                $("<button>").text("Delete").addClass("delete-butt").appendTo($booksDiv)
                $($booksDiv).appendTo("#booksBox")
            })
        }
    }
})

module.exports = bookPrinter