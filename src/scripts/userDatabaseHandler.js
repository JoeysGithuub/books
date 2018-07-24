const $ = require("jquery");

const userData = Object.create({}, {
    postUser: {
        value: (newUser) => {
            console.log(newUser)
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "POST",
                data: newUser
            })
        }
    },
    getAllUsers: {
        value: () => {
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "GET"
            })
        }
    }
})
module.exports = userData