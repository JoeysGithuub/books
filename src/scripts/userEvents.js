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

const $select = $("#users")

$.getJSON("http://localhost:3000/users", function(data) {
    $select.html("")

    for(let i = 0; i < data["users"]; i++) {
        $select.append("<option id=" + data["users"][i]["id"] + ">" + data["users"][i]["name"] + "</option>")
    }
})

// $("#add-buttt").on("click", function () {
//     // console.log("heh")
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:3000/users",
//         dataType: "json",
//         success: function(data) {
//             $.each(data.users, function(i, obj) {
//                 const userFo= "<option value="+obj.name+">"+obj.id+"</option>"
//                 $(userFo).appendTo("#sel")
//             //  $("#sel").append($("<option/>").attr("value", option.id).text(option.name));
//             })
//         }
//     })
// })

// $(function() {
//     const users = [
//         {
//         "name": "df",
//         "id": 1 },
//     {
//         "name": "Joe",
//         "id": 2 }
//     ];
// $("#userShelf").on("click", "#add-buttt", () => {
//     $.getJSON("http://localhost:3000/users?name=${name}",
//         $.each(users, function (i, option) {
//             $("#sel").append($("<option/>").attr("value", option.id).text(option.name));
//         }))
//     })
// let dropDown = $("#locality-dropDown");

// dropDown.empty();

// // dropDown.append("<option selected="true" disabled>Choose State/Province</option>");
// dropDown.prop("selectedIndex", 0);

// // const url = 'https://api.myjson.com/bins/7xq2x';

// // Populate dropDown with list of provinces
// $.getJSON(url, function (data) {
//     $.each(data, function (key, entry) {
//         dropDown.append($("<option></option>").attr("value", entry.abbreviation).text(entry.name));
//     })
// });


// //  dropDown.onclick() => {
// btnGenerate.onclick = dropDown() {
//     //Build an array containing users.
//     const newUser = []
//     const moreUsers = document.getElementById("moreUsers");

//     //Add the Options to the DropDownList.
//     for (const i = 0; i < newUser.length; i++) {
//         const option = document.createElement("OPTION");

//         //Set Customer Name in Text part.
//         option.innerHTML = newUser[i].Name;

//     }
// }

// $(document).ready(function() {
//     $.getJSON("./database.json", function(obj) {
//         $.each(obj.users, function(key, value) {
//             $("#dropDownUsers").append("<option>" + value.newUser + "</option>");
//         });
//     });
// });


// $("#userShelf").on("click", ".delete-buttt", () => {
//     const userID = $(event.target).parent().attr("id")
//     userData.deleteUser(userID)
//         .then(() => {
//             return userData.getAllUsers()
//         })
//         .then((userArray) => {
//             userPrinter.printUsers(userArray)
//        })
