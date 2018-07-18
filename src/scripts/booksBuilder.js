const $ = require("jquery")

const bookShelf = Object.create({}, {
  buildBookShelf: {
    value: () => {
      const $formDiv = $("<div>").attr("id", "form");
      $("<input>").attr("id", "bookTitle-input").attr("placeholder", "Book Title").appendTo($formDiv);
      $("<input>").attr("id", "bookSummary-input").attr("placeholder", "Summary").appendTo($formDiv);
      $("<input>").attr("id", "bookPages-input").attr("placeholder", "Pages You Have Read").appendTo($formDiv);
      $("<button>").attr("id", "add-butt").text("Log Book").appendTo($formDiv);
      // $("<button>").attr("id", "delete-butt").text("Delete").appendTo($formDiv);
      $formDiv.appendTo($("#bookShelf"))
    }
  }
})

module.exports = bookShelf;

