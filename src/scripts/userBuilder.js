const $ = require("jquery")

const userInfo = Object.create({}, {
  buildUserInfo: {
    value: () => {
      const $formDiv = $("<div>").attr("id", "form");
      $("<input>").attr("id", "userName-input").attr("placeholder", "Username").appendTo($formDiv);
      $("<button>").attr("id", "add-buttt").text("Sign Up").appendTo($formDiv);
      $formDiv.appendTo($("#userShelf"))
    }
  }
})

module.exports = userInfo;