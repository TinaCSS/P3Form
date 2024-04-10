


//1. Importo mongoose
const mongoose = require('mongoose') 

//2. defino el modelo (Entidad, ciruela)

const gardenSchema = new mongoose.Schema({
    selfWatering: {
        type: Boolean,
        required: true,
    },
    maintenance: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'low', 'medium', 'high']
    },
    origin: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'native', 'exotic'] 
    },
    follage: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'deciduous', 'evergreen'] 
    },
    fruit: {
        type: Boolean,
        required: true,
    },
    alergens: [{
        type: String,
        required: true,
        trim: true,
        enum: [ 'conifers', 'graminea', 'cupressaceae', 'urticant', 'flowers', 'none'] 
    }],
    parks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Park",
        }],
    greenLanes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "GreenLane",
        }]
})

//3. Guardar el modelo para luego compartirlo para otras cosas

const Garden = mongoose.model('Garden', gardenSchema)

//4. para que el modelo sea público

module.exports = Garden
// para varios se crea un array, peor hay que recibirlo como tal: module.exports = [Plum, Parrot, Apple]