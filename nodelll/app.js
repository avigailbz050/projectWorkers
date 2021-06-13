// const express = require("express");
// // const server = express();
// const mongoose = require("mongoose")
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// // const request = require('request')
// const { response } = require('express')
// // const checkJWT = require('./controller/login')
// const router = require('./routes/api')
// // const jwt = require('jsonwebtoken')
// dotenv.config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const router = require('./routs/api')
const bodyParser = require("body-parser");
// const admin = require('firebase-admin')


const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(`error connecting${err}`);
    })
app.use(bodyParser.json())
app.use('/',router)
app.listen(3001, () => console.log("app listen port 3001"));

