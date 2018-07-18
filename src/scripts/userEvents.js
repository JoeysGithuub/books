const userData = require("./userDatabaseHandler");
const userPrinter = require("./userPrint");
const $ = require("jquery")

// let userID = "";

// console.log($("#add-buttt"))

$("#userShelf").on("click", "#add-buttt", () => {
    // console.log("ere")
    const nameInput = $("#userName-input").val();
    const newUser = {
        name: nameInput
    }
    // console.log($("#add-buttt"))

    userData.postUser(newUser)
        .then((userInfo) => {
            userID = userInfo.id
            $("#userName-input").val("").attr("placeholder", "Username")
            console.log(userInfo)
            return userData.getAllUsers()
        })
        .then(userArray => {
            userPrinter.printUsers(userArray)
        })
})

$(document).ready(function() {
    $.getJSON("./database.json", function(obj) {
        $.each(obj.users, function(key, value) {
            $("#dropDownUsers").append("<option>" + value.newUser + "</option>");
        });
    });
});


$("#userShelf").on("click", ".delete-buttt", () => {
    const userID = $(event.target).parent().attr("id")
    userData.deleteUser(userID)
        .then(() => {
            return userData.getAllUsers()
        })
        .then((userArray) => {
            userPrinter.printUsers(userArray)
        })
})

