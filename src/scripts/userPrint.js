const $ = require("jquery")


const printer = Object.create({}, {
    printUsers: {
        value: function (userArray) {
            $("#userShelf").empty();
            userArray.forEach((user) => {
                const $userDiv = $("<div>").attr("id", user.id)
                $("<h4>").text(user.name).appendTo($userDiv);
                // $("<button>").text("Delete").addClass(".delete-buttt").appendTo($userDiv);
                $($userDiv).appendTo("#userShelf");
            })
        }
    }
})


module.exports = printer;