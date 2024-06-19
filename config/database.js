const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Terkoneksi ke mongoDb");
    } catch (error) {
        console.log('Gagal terkoneksi ke mongoDb', error.message);
        process.exit(1);
    }
}

module.exports = dbConnect;