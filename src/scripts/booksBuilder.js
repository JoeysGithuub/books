const $ = require("jquery")

const bookShelf = Object.create({}, {
  buildBookShelf: {
    value: () => {
      const $formDiv = $("<div>").attr("id", "form");
      $("<input>").attr("id", "bookShelf-input").attr("placeholder", "Book Title").appendTo($formDiv);
      $("<input>").attr("id", "summary-input").attr("placeholder", "Summary").appendTo($formDiv);
      $("<input>").attr("id", "synopsis-input").attr("placeholder", "Pages You've Read").appendTo($formDiv);
      $("<button>").attr("id", "submit-butt").text("Log Book").appendTo($formDiv);
      $("<button>").attr("id", "delete-butt").text("Delete").appendTo($formDiv);
      $formDiv.appendTo($("#bookShelf"))
    }
  }
})

module.exports = bookShelf;

