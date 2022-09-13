const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const fs = require("fs")
const userRoute = require("./Routes/v1/User.route")


app.use(cors())
app.use(express.json())
app.use('/api/v1/user', userRoute)
app.get('/', (req, res) => {
    res.send('Server is running well')
})
app.get("/api/v2/text", (req, res) => {
    fs.readFile('./userData.json', "utf-8", (err, data) => {
        if (err) {
            console.log(err,"i am from if")
            res.end()
        }
        else {
            const users = JSON.parse(data)
            console.log("hey i am from else")
            res.send(users)
        }
    })
})
app.all('*', (req, res) => {
    res.send("NOT FOUND WHAT YOU ARE LOOKING FOR")
})
app.listen(port, () => {
    console.log("Server is well")
})
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});