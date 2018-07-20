const userBuild = require("./userBuilder")
const userPrinter = require("./userPrint")
const $ = require("jquery")

userBuild.buildUserInfo()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/users")
    .then((user) => {
        userPrinter.printUsers(user)
    })
}

printOnPageLoad()
