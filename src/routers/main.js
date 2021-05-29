const express = require('express');
const router = new express.Router();
const SellersData = require('../models/sellers.js')

router.get('/',async (req, res) =>{
    res.send('<h1>Hello and Welcome</h1>');   
   })
   
   //complete
   router.get('/api',async (req, res) =>{
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
   router.get('/api/:id',async (req, res) =>{
       try{
           const _id = req.params.id;
           const getSeller = await SellersData.findById(_id);
           res.send(getSeller);
       }
       catch(e){
           res.status(400).send(e);
       }
       
   })
   
   router.post('/api',async (req, res) =>{
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
   router.patch('/api/:id',async (req, res) =>{
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
   
   router.delete('/api/:id',async (req, res) =>{
       try{
           const _id = req.params.id;
           const getSeller = await SellersData.findByIdAndDelete(_id);
           res.send(getSeller);
       }
       catch(e){
           res.status(500).send(e);
       }
       
   })

module.exports = router;
