const express = require("express")
const {
    createGarden,
    getGarden,
    updateGarden,
    deleteGarden,
    findGarden,
} = require("./garden.controller")

const gardenRouter = express.Router();

gardenRouter.get('/:id', getGarden);
gardenRouter.post('/', createGarden);
gardenRouter.patch('/:id', updateGarden);
gardenRouter.delete('/:id', deleteGarden);
gardenRouter.get('/', findGarden);

module.exports = gardenRouter;