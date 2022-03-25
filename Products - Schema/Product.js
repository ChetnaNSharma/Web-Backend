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
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale:{
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online:{
            type: Number,
            default: 0
        },
        inStore:{
            type: Number,
            default: 0
        }
    }
    }
})

const Product = mongoose.model('Product','productSchema')
const bike = new Product({name: 'Mountain Bike', price: 599, color: 'red', categories: ['cycling', 'safety']})
bike.save()
.then( data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})