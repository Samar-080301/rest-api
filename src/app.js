const express = require('express');
const app = express();
const port = process.env.PORT || 100;
app.use(express.json());
require('../src/db/conn.js');
const SellersData = require('../src/models/sellers.js')


app.get('/',async (req, res) =>{
 res.send('<h1>Hello and Welcome</h1>');   
})

app.get('/api',async (req, res) =>{
    
})

app.post('/api',async (req, res) =>{
    try{
        const addingSellersData = new SellersData(req.body)
        console.log(req.body);
        const insertSellers = await addingSellersData.save();
        res.status(201).send(insertSellers);
    }
    catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, () =>{
    console.log(`listening on http://127.0.0.1:${port}`)
})
