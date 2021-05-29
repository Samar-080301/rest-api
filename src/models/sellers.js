const express = require('express');
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String   
    },
    rank: {
        type: Number
    }
})

const SellersData = new mongoose.model("Seller_data",sellerSchema)

module.exports = SellersData;  