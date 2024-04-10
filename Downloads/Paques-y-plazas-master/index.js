

// Importaciones
const express = require('express')
require("dotenv").config();
const gardenRouter = require('./api/garden/garden.router')
const { connectMongo } = require("./util/db");
const greenLaneRouter = require('./api/garden/greenlane.router');
const parkRouter = require('./api/garden/park.router');

// Configuraciones

const app = express()
app.use(express.json());

const PORT = process.env.PORT || 3000;
connectMongo();

// Endpoints


/*app.get('/', function (req,res) {
    res.send('Hello Barbie')
})*/
app.use("/garden", gardenRouter);
app.use("/garden/park", parkRouter);
app.use("/garden/greenLane", greenLaneRouter);
// Puerto

app.listen(PORT, () => {
    console.log("Servidor iniciado en puerto: " + PORT);
  });


