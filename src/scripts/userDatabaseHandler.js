const $ = require("jquery");

const userData = Object.create({}, {
        postUser: {
            value: (newUser) => {
                return $.ajax({
                    url: "http://localhost:3000/books",
                    method: "POST",
                    data: newUser
                })
            }
        },
    getAllUsers: {
        value: (name) => {
            return $.ajax({
            url: "http://localhost:3000/users",
            method: "GET",
            data: name
        })
    }
},
    deleteUser: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/users/${id}`,
                method: "DELETE",
            })
        }
    },
    getUserByName: {
        value: (name) => {
            console.log(name)
            return $.ajax({
                url: `http://localhost:3000/users?name=${name}`
            })
        }
    }
})
module.exports = userData