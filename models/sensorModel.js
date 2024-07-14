const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    voltage: {
        type: Number,
        required: false,
    },
    current: {
        type: Number,
        required: false,
    },
    soc: {
        type: Number,
        required: false,
    },
    suhu: {
        type: Number,
        required: false,
    },
    set: {
        type: Number,
        required: false,
    },
    waktu: {
        type: Date,
        default: Date.now,
    },
})

const SensorData = mongoose.model("SensorData", sensorSchema);

module.exports = SensorData;