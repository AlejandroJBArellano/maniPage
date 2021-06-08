const express = require("express"), routes = require("./routes/index"), path = require("path"), app = express();

// * Settings
app.set("port", process.env.PORT || 5000);
app.use(express.urlencoded({extended: false}))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

// * Middlewares
app.use((req, res, next)=>{
    console.info(`${req.body} ${req.method}`);
    next();
})

// * Routes

app.use(routes)

// * errores


// * static files
app.use(express.static(path.join(__dirname, "public")))

// * start the server
app.listen(app.get("port"), _=>console.log(`server on port ${app.get("port")}`));