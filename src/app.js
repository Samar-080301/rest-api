const express = require('express');
const app = express();
const port = process.env.PORT || 100;
app.use(express.json());
require('../src/db/conn.js');
const SellersData = require('../src/models/sellers.js')
const router = require('../src/routers/main.js')
app.use(router);


app.listen(port, () =>{
    console.log(`listening on http://127.0.0.1:${port}`)
})
