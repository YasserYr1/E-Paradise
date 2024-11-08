const mongoose = require('mongoose');

const {Schema} = mongoose;

const CartSchema = new Schema({
    owner: {type:Schema.Types.ObjectId, ref:'User'},
    productId: String,
    name: String,
    price: String,
    imgURL: String,
    quantity: Number,
})

const CartModel = mongoose.model('Cart', CartSchema);
module.exports = CartModel;