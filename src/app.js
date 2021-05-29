const express = require('express');
const app = express();
const port = process.env.PORT || 100;
app.use(express.json());
require('../src/db/conn.js');
const SellersData = require('../src/models/sellers.js')


app.get('/',async (req, res) =>{
 res.send('<h1>Hello and Welcome</h1>');   
})

//complete
app.get('/api',async (req, res) =>{
    try{
        const getSellers = await SellersData.find({}) //.sort({"attribute":1}) for ascending sorting of json data
        res.send(getSellers);
    }
    catch(e){
        res.status(400).send(e);
    }
    
})

//specific
//eg. http://127.0.0.1:100/api/60b27db99764846700e85283 i.e. the _id in db
app.get('/api/:id',async (req, res) =>{
    try{
        const _id = req.params.id;
        const getSeller = await SellersData.findById(_id);
        res.send(getSeller);
    }
    catch(e){
        res.status(400).send(e);
    }
    
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

//upadte a part of data
/* pass the new data only eg. if only name has to be updates then
{"name":"XYZ"}
 */
app.patch('/api/:id',async (req, res) =>{
    try{
        const _id = req.params.id;
        const getSeller = await SellersData.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(getSeller);
    }
    catch(e){
        res.status(500).send(e);
    }
    
})

app.delete('/api/:id',async (req, res) =>{
    try{
        const _id = req.params.id;
        const getSeller = await SellersData.findByIdAndDelete(_id);
        res.send(getSeller);
    }
    catch(e){
        res.status(500).send(e);
    }
    
})


app.listen(port, () =>{
    console.log(`listening on http://127.0.0.1:${port}`)
})
