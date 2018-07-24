const userData = require("./userDatabaseHandler");
const userPrinter = require("./userPrint");
const $ = require("jquery")

// const userID = "";

// const userNames = () => {
//     const nameInput = $("#userName-input").val();
//     const newUser = {
//         name: nameInput
//     }
// }

$("#damn").on("click", "#add-buttt", () => {
    console.log("ere")
    const userNameInput = $("#userName-input").val();
    const newUser = {
        name: userNameInput
    }
    console.log(userData)

    userData.postUser(newUser)
        .then((userInfo) => {
            console.log(userInfo)
            $("#userName-input").val("").attr("placeholder", "Username")
            return userData.getAllUsers()
        })
        .then(userArray => {
            console.log(userArray)
            userPrinter.printUsers(userArray)
        })
})

// let updateUserID;

// $("#damn").on("click", "#add-buttt", () => {
//     updateUserID = $(event.target).parent().attr("id")
//     // console.log("#updateBookID")
//     userData.getAllUsers(updateUserID)
//         .then((response) => {
//             console.log(response)
//             const userNameInput = $("#userName-input").val();
//         })
// })


// $.ajax({
//     type: "POST",
//     url:   "http://localhost:3000/users",
//     success: function(data)
//     {
//         helpers.buildDropList(
//             jQuery.parseJSON(data),
//             $("#dropList"),
//             "Select an option"
//         );
//     }
// });

// const helpers =
// {
//     buildDropList: function(result, dropList, emptyMessage)
//     {
//         // Remove current options
//         dropList.html("");
//         // Add the empty option with the empty message
//         dropList.append("<option value ="">" + emptyMessage + "</option>")
//         // Check result is not empty
//         if(result !== "")
//         {
//             // Loop through each of the results and append the option to the dropList
//             $.each(result, function(k, v) {
//                 dropList.append('<option value="' + v.id + '">' + v.name + '</option>');
//             });
//         }
//     }
// }


// let userID = "";

// console.log($("#add-buttt"))

// const userNames = () => {
//     const nameInput = $("#userName-input").val();
//     const newUser = {
//         name: nameInput
//     }
// }

// $("#userShelf").on("click", "#add-buttt", () => {
//     // console.log("ere")
//     const nameInput = $("#userName-input").val();
//     const newUser = {
//         name: nameInput
//     }
//         userData.postUser(newUser)
//     .then((userInfo) => {
//         userID = userInfo.id
//         $("#userName-input").val("").attr("placeholder", "Username")
//         return userData.getAllUsers(newUser.id)
//     })
//     .then(userArray => {
//         userPrinter.printUsers(userArray)
//     })
// })

// userData.postUser(newUser)
//     .then((userInfo) => {
//         userID = userInfo.id
//         $("#userName-input").val("").attr("placeholder", "Username")
//         return userData.getAllUsers(newUser.id)
//     })
//     .then(userArray => {
//         userPrinter.printUsers(userArray)
//     })

// $("#add-buttt").on("click", function () {
//     // console.log("heh")
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:3000/users",
//         dataType: "json"
//     })
// })
