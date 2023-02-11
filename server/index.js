const express = require("express")
const app = express()
const db = require("./models");
const cors = require('cors');


app.use(cors({
    origin: "*"
}))

app.use(express.json());
const routerVozila = require("./routes/voziloRoutes");

app.use("/", routerVozila);

db.sequelize.sync().then(() => {
    app.listen(3001, () =>{
        console.log("It's working!");
    })
})
