require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/database');
const router = require('./routes/router');

const app = express();

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send("API SOC READY");
})
app.use(router);
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})