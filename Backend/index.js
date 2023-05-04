const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
const PORT = process.env.PORT || 8080
const userRoute = require("./src/controller/user.route.js");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("", userRoute);

app.get("", async (req, res) => {
    res.send("Hello to the api")
})

app.listen(PORT, async (req, res) => {
    try {
        await connect();
        console.log(`http://localhost:${PORT}`)
    } catch (error) {
        console.log(error);
    }
})
