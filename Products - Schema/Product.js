const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myShop',{useNewUrlParser: true}
.then(() => {
    console.log("Connection Open");
})
.catch(err => {
    console.log("Error");
})

const productSchema = new mongoose.Schema({
    name: {
        type: String
        required: true
    },
    price: {
        type: Number
    },
})

const Product = mongoose.model('Product','productSchema')
const bike = new Product({name: 'Mountain Bike', price: 599, color: 'red'})
bike.save()
.then( data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})