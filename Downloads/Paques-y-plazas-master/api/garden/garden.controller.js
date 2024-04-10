


const Garden = require('../../assets/garden.model');

// CRUD

// CREATE - POST

const createGarden = async (req, res) => {
    //console.log(req);
    try {
//Con los parametros que me manda el cliente instancio el mocelo(+- clase) Animal.
        const cGarden = new Garden(req.body);
//Lo guardo en mi base de datos
        await cGarden.save()
// le damos respuesta al cliente de que todo chido
        res.json({
            status: 201,
            message: 'created a new garden',
            data: cGarden,
        });


    } catch (error) {
        console.log(error);
    }
}

// READ - GET


const getGarden = async (req, res) => {
    try {

        const id = req.params.id;
        const gGarden = await Garden.findById(id).populate(["parks", "greenLanes"]);
        res.json({
            status: 200,
            message: 'Tell me about it',
            data: gGarden,
        });


    } catch (error) {
        console.log(error);
    }
}

// UPDATE - PATCH

const updateGarden = async (req, res) => {
    try{
        
//Busco por id el sal a editar
        const id = req.params.id
        const idGarden = await Garden.findById(id)
        console.log(idGarden);
//Busco los datos que hay que editar del body/payload
        const body = req.body
//Uso la función de Mongo que sirve para editar coasa
        const gardenUpdated = await Garden.findByIdAndUpdate(id, body, { new : true })
// le damos respuesta al cliente de que todo chido
        res.json({
            status: 200,
            message: 'updated',
            data: gardenUpdated,
        });


    } catch (error) {
        console.log(error);
    }
}

// DELETE

const deleteGarden = async (req, res) => {
    try{

        const id = req.params.id
        const dGarden = await Garden.findByIdAndDelete(id)
        res.json({
            status: 200,
            message: 'deleted',
            data: dGarden,
        });


    } catch (error) {
        console.log(error);
    }
}

// find(get)

const findGarden = async (req, res) => {
    try {
        
        const fGarden = await Garden.find()
        res.json({
            status: 200,
            message: 'Ok',
            data: fGarden,
        });


    } catch (error) {
        console.log(error);
    }
}


// Export

module.exports = { createGarden, getGarden, updateGarden, deleteGarden, findGarden }