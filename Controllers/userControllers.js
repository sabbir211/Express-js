const fs = require('fs')


module.exports.getAllUser = (req, res) => {
    fs.readFile('userData.json', "utf-8", (err, data) => {
        if (err) {

            res.end()
        }
        else {
            const users = JSON.parse(data)

            res.send(users)
        }
    })
}
module.exports.getAUser = (req, res) => {
    fs.readFile('userData.json', "utf-8", (err, data) => {
        if (err) {

            res.end()
        }
        else {
            const users = JSON.parse(data)
            const randomId = Math.round(Math.random() * (users.length - 1) + 1)
            const randomUser = users.find(user => user.id === randomId)
            res.send(randomUser)
        }
    })
}
module.exports.addAUser = (req, res) => {
    fs.readFile('userData.json', "utf-8", (err, data) => {
        if (err) {
            res.end()
        }
        else {
            const users = JSON.parse(data)
            const newUser = req.body
            users.push(newUser)
            fs.writeFile("userData.json", JSON.stringify(users), "utf-8", (err) => {
                if (err) {
                    res.end()
                }
                else {
                    res.send("data inserted successfully")
                }
            })
        }
    })
}
module.exports.updateAUser = (req, res) => {
    fs.readFile('userData.json', "utf-8", (err, data) => {
        if (err) {

            res.end()
        }
        else {
            const users = JSON.parse(data)
            const id = parseInt(req.params.id)
            // const selectedUser = users.find(user => user.id === id)
            const newObj = req.body
            const updatedObj = {
                id: id,
                gender: newObj.gender,
                name: newObj.name,
                contact: newObj.contact,
                address: newObj.address,
                photoUrl: newObj.photoUrl
            }
            users.push(JSON.stringify(updatedObj))
            fs.writeFile("userData.json", JSON.stringify(users), "utf-8", (err) => {
                if (err) {
                    res.end()
                }
                else {
                    res.send("data inserted successfully")
                }
            })
        }
    })
}
module.exports.updateMultipleUser = (req, res) => {
    res.send('i am from controller updateMultipleUser')
}
module.exports.deleteAUser = (req, res) => {
    fs.readFile('userData.json', "utf-8", (err, data) => {
        if (err) {

            res.end()
        }
        else {
            const users = JSON.parse(data)
            const id = parseInt(req.params.id)
           const restUsers= users.filter(user => user.id != id)
            fs.writeFile("userData.json", JSON.stringify(restUsers), "utf-8", (err) => {
                if (err) {
                    res.end()
                }
                else {
                    res.send("data deleted successfully")
                }
            })
        }
    })
}