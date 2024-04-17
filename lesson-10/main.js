// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    app = express();

app.set("port", process.env.PORT||port);
app.set("view engine", "ejs");

app.use(layouts); //layouts.ejs를 사용할 수 있음

app.get('/name/:myName', homeController.respondWithName);
//app.get(); = GET method
//app.post(); = POST mehod

app.listen(app.get("port"), () => {
    console.log(`Server at http://localhost:${app.get("port")}`);
});