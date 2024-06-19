const Sensor = require('../models/sensorModel');

const createSensor = async (req, res) => {
    try {
        const { voltage, current, soc} = req.body;

        const sensorData = {
            voltage,
            current,
            soc,
            waktu: Date.now()
        }
        await Sensor.create(sensorData);

        res.status(201).json({
            success: true,
            statusCode: res.statusCode,
            message: "Data berhasil dibuat",
            data: sensorData,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            statusCode: res.statusCode,
            error: error.message
        });
    }
}

const getSensors = async (req, res) => {
    try {
        const dataSensor = (await Sensor.find().sort({waktu:-1}));
        if (!dataSensor){
            return res.status(404).json({
                message: 'Data sensor tidak ditemukan'
            })
        }
        const sensor = dataSensor.map(sensor => ({
            voltage: sensor.voltage,
            current: sensor.current,
            temp: sensor.temp,
            soc: sensor.soc,
            waktu: sensor.waktu
        }))
        res.status(200).json({
            success: true,
            statusCode: res.statusCode,
            data: sensor
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {createSensor,getSensors };