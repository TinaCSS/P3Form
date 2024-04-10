


const Park = require('../../assets/park.model');

// CRUD

// CREATE - POST

const createPark = async (req, res) => {
    //console.log(req);
    try {
//Con los parametros que me manda el cliente instancio el mocelo(+- clase) Animal.
        const cPark = new Park(req.body);
//Lo guardo en mi base de datos
        await cPark.save()
// le damos respuesta al cliente de que todo chido
        res.json({
            status: 201,
            message: 'created a new park',
            data: cPark,
        });


    } catch (error) {
        console.log(error);
    }
}

// READ - GET


const getPark = async (req, res) => {
    try {

        const id = req.params.id;
        const gPark = await Park.findById(id);
        res.json({
            status: 200,
            message: 'Tell me about it',
            data: gPark,
        });


    } catch (error) {
        console.log(error);
    }
}

// UPDATE - PATCH

const updatePark = async (req, res) => {
    try{
        
//Busco por id el sal a editar
        const id = req.params.id
        const idPark = await Park.findById(id)
//Busco los datos que hay que editar del body/payload
        const body = req.body
//Uso la función de Mongo que sirve para editar coasa
        const parkUpdated = await Park.findByIdAndUpdate(id, body, { new : true })
// le damos respuesta al cliente de que todo chido
        res.json({
            status: 200,
            message: 'updated',
            data: parkUpdated,
        });


    } catch (error) {
        console.log(error);
    }
}

// DELETE

const deletePark = async (req, res) => {
    try{

        const id = req.params.id
        const dPark = await Park.findByIdAndDelete(id)
        res.json({
            status: 200,
            message: 'deleted',
            data: dPark,
        });


    } catch (error) {
        console.log(error);
    }
}

// find(get)

const findPark = async (req, res) => {
    try {
        
        const fPark = await Park.find()
        res.json({
            status: 200,
            message: 'Ok',
            data: fPark,
        });


    } catch (error) {
        console.log(error);
    }
}


// Export

module.exports = { createPark, getPark, updatePark, deletePark, findPark }