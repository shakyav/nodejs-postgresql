const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

var corsOptions = {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = require("./app/models");

db.sqlz.sync({force:true}).then(() => {
    console.log("Drop and re-sync db.");
});

require('./app/routes/user.routes')(app);

app.get("/",(req,res) => {
   res.json({message:"server is running"})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app
