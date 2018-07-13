const booksDatabaseHandler = Object.create({}, {
    postNews: {
        value: (newTaskObject) => {
            return $.ajax({
                url: "http://localhost:3000/books",
                method: "POST",
                data: newBookObject
            })
        }
    },
    getAllBooks: {
        value: () => {
            return $.ajax("http://localhost:3000/books")
        }
    },
    deleteBooks: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${id}`,
                method: "DELETE"
            })
        }
    }
});
jkhjkhlkhk
// module.exports = BooksDataa