const $ = require("jquery")

const bookPrinter = Object.create({}, {
    printBooks: {
        value: function(booksArray) {
            $("#book-box").empty();
            booksArray.forEach((books) => {
                const $booksDiv = $("<div>").attr("id", books.id)
                $("<h4>").text(books.title).appendTo($booksDiv)
                $("<p>").text(books.summary).appendTo($booksDiv)
                $("<p>").text(books.pages).appendTo($booksDiv)
                $("<input>").attr("type", "checkbox").addClass("checkbox-butt").attr("id", "boxCheck").appendTo($booksDiv);
                const $checkbox = $("<label>").attr("for", "read").text("Done Reading").appendTo($booksDiv);
                $("<button>").text("Edit").addClass("edit-butt").appendTo($booksDiv)
                $("<button>").text("Update").addClass("update-butt").appendTo($booksDiv)
                $("<button>").text("Delete").addClass("delete-butt").appendTo($booksDiv)
                $($booksDiv).appendTo("#book-box")
            })
        }
    }
})

module.exports = bookPrinter

