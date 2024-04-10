const express = require("express")
const {
    createPark,
    getPark,
    updatePark,
    deletePark,
    findPark,
} = require("./park.controller")

const parkRouter = express.Router();

parkRouter.get('/:id', getPark);
parkRouter.post('/', createPark);
parkRouter.patch('/:id', updatePark);
parkRouter.delete('/:id', deletePark);
parkRouter.get('/', findPark);

module.exports = parkRouter;