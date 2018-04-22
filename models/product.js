var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/product')

var user_schema = new Schema({
  producto: String,
  fecha: {type:Date, default: Date.now},
  })
var Product = mongoose.model('Product', user_schema)

module.exports.Product = Product