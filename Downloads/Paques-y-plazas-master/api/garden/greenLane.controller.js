


const GreenLane = require('../../assets/greenlane.model')

// CRUD

// CREATE - POST

const createGreenLane = async (req, res) => {
    //console.log(req);
    try {
//Con los parametros que me manda el cliente instancio el mocelo(+- clase) Animal.
        const cGreenLane = new GreenLane(req.body);
//Lo guardo en mi base de datos
        await cGreenLane.save()
// le damos respuesta al cliente de que todo chido
        res.json({
            status: 201,
            message: 'created a new greenLane',
            data: cGreenLane,
        });


    } catch (error) {
        console.log(error);
    }
}

// READ - GET


const getGreenLane = async (req, res) => {
    try {

        const id = req.params.id;
        const gGreenLane = await GreenLane.findById(id);
        res.json({
            status: 200,
            message: 'Tell me about it',
            data: gGreenLane,
        });


    } catch (error) {
        console.log(error);
    }
}

// UPDATE - PATCH

const updateGreenLane = async (req, res) => {
    try{
        
//Busco por id el sal a editar
        const id = req.params.id
        const idGreenLane = await GreenLane.findById(id)
//Busco los datos que hay que editar del body/payload
        const body = req.body
//Uso la función de Mongo que sirve para editar coasa
        const greenLaneUpdated = await GreenLane.findByIdAndUpdate(id, body, { new : true })
// le damos respuesta al cliente de que todo chido
        res.json({
            status: 200,
            message: 'updated',
            data: greenLaneUpdated,
        });


    } catch (error) {
        console.log(error);
    }
}

// DELETE

const deleteGreenLane = async (req, res) => {
    try{

        const id = req.params.id
        const dGreenLane = await GreenLane.findByIdAndDelete(id)
        res.json({
            status: 200,
            message: 'deleted',
            data: dGreenLane,
        });


    } catch (error) {
        console.log(error);
    }
}

// find(get)

const findGreenLane = async (req, res) => {
    try {
        
        const fGreenLane = await GreenLane.find()
        res.json({
            status: 200,
            message: 'Ok',
            data: fGreenLane,
        });


    } catch (error) {
        console.log(error);
    }
}


// Export

module.exports = { createGreenLane, getGreenLane, updateGreenLane, deleteGreenLane, findGreenLane }