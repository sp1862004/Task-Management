const express = require('express')
const app = express()
const port = 4000
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("./config/db")
const cors=require("cors")
app.use(cors({
    exposedHeaders: ['auth-token'],
}));
const userRoute=require("./Route/UserRoute")
app.use("/api/user",userRoute)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))