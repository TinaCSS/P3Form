


//1. Importo mongoose
const mongoose = require('mongoose') 

//2. defino el modelo (Entidad, ciruela)

const parkSchema = new mongoose.Schema({
    pavement: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'gravel', 'soil', 'paved', 'cobblestone'] 
    },
    waterOutlets: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'drinking', 'hidrants', 'none'] 
    },
    waterBodies: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'fountain', 'pond', 'lake', 'river', 'gayser', 'none'] 
    },
    recreation: {
        type: Boolean,
        required: true,
    },
    dogPark: {
        type: Boolean,
        required: true,
    },
    sportsArea: {
        type: Boolean,
        required: true,
    },
    shops: {
        type: Boolean,
        required: true,
    },
})


//3. Guardar el modelo para luego compartirlo para otras cosas

const Park = mongoose.model('Park', parkSchema)

//4. para que el modelo sea público

module.exports = Park
// para varios se crea un array, peor hay que recibirlo como tal: module.exports = [Plum, Parrot, Apple]