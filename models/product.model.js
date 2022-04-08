const mongoooes = require('mongoose');
const Schema = mongoooes.Schema;

const ProductSchema = new Schema({
    name: {type:String, required:true, max:100},
    price: {type:Number, required:true},
})


module.exports = mongoooes.model('Product', ProductSchema);