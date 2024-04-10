


//1. Importo mongoose
const mongoose = require('mongoose') 

//2. defino el modelo (Entidad, ciruela)

const greenLaneSchema = new mongoose.Schema({
    class: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'pedestrian', 'Boulevard', 'promenade', 'avenue', 'street'] 
    },
    length: {
        type: Number,
        required: true,
        trim: true,
    },
    width: {
        type: Number,
        required: true,
        trim: true,
    },
    bench: {
        type: Number,
        required: true,
        trim: true,
    },
    alcorque: {
        type: String,
        required: true,
        trim: true,
        enum: [ 'soil', 'cover', 'elevated'] 
    },
    bikeLane: {
        type: Boolean,
        required: true,
    },
})

//3. Guardar el modelo para luego compartirlo para otras cosas

const GreenLane = mongoose.model('GreenLane', greenLaneSchema)

//4. para que el modelo sea público

module.exports = GreenLane
// para varios se crea un array, peor hay que recibirlo como tal: module.exports = [Plum, Parrot, Apple]