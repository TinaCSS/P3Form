const express = require("express")
const {
    createGreenLane,
    getGreenLane,
    updateGreenLane,
    deleteGreenLane,
    findGreenLane,
} = require("./greenLane.controller")

const greenLaneRouter = express.Router();

greenLaneRouter.get('/:id', getGreenLane);
greenLaneRouter.post('/', createGreenLane);
greenLaneRouter.patch('/:id', updateGreenLane);
greenLaneRouter.delete('/:id', deleteGreenLane);
greenLaneRouter.get('/', findGreenLane);

module.exports = greenLaneRouter;