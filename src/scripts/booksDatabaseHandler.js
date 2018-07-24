const $ = require("jquery");

const bookData = Object.create({}, {
    postBook: {
        value: (newBook) => {
            console.log(newBook)
            return $.ajax({
                url: "http://localhost:3000/books",
                method: "POST",
                data: newBook
            })
        }
    },
    getAllBooks: {
        value: () => {
            return $.ajax("http://localhost:3000/books")
        }
    },
    getBook: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${id}`,
                method: "GET"
            })
        }
    },
    putBook: {
        value: (updateBook) => {
            return $.ajax({
                url: `http://localhost:3000/books/${updateBook.id}`,
                method: "PUT",
                data: {
                    title: updateBook.title,
                    summary: updateBook.summary,
                    pages: updateBook.pages,
                }
            })
        }
    },
    readBook: {
        value: function (editedId) {
            return $.ajax({
                url: `http://localhost:3000/books/${editedId}`,
                type: "PATCH",
                data: {
                    read: true
                }
            })
        }
    },
    editBook: {
        value: (newBook) => {
            return $.ajax({
                url: `http://localhost:3000/books/${newBook.id}`,
                type: "PATCH",
                data: newBook
            })
        }
    },
    deleteBook: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${id}`,
                method: "DELETE",
            })
        }
    }
})

module.exports = bookData