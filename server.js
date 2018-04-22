var express = require('express')
var app = express()
var Product = require('./models/product').Product
var bodyParser = require('body-parser')

/*var products=[
    {id:1, name:'laptop'},
    {id:2, name:'microwave'}
]
var currentId   = 2*/

var PORT = process.env.PORT || 3000

app.use(express.static(__dirname))
app.use(bodyParser.json())

app.get('/products', function(req, res){
    Product.find().then(function(products){
    
    res.send({products:products})
    })
})

app.post('/products', function(req,res){
    var product=new Product({producto: req.body.name})
    product.save().then(function(us){
    //console.log(us)

   /* var productName = req.body.name
    currentId++
    products.push({
        id: currentId,
        name: productName
    })*/

    res.send('succesfull created produc')
    })
})

app.put('/products/:id', function(req,res){
    var id = req.params.id
    var newName = req.body.newName
    Product.findByIdAndUpdate({_id:id},{$set:{producto:newName}}).then(function(us){
    
    res.send('succesfully update product')
    })
})

app.delete('/products/:id', function(req,res){
    var id = req.params.id
    Product.findByIdAndRemove({_id:id}).then(function(us){
    
        res.send('succesfully delete product')
    })
})
app.listen(PORT, function(){
    console.log('Server listening on '+ PORT)
})

