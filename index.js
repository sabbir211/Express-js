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