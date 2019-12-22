// import the model
const Product = require('../models/product.model');

exports.test = function(req, res) {
    res.send('hello world');
}


exports.create = function(req, res) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function(error) {
        if (error) {
            return next(error);
        }
        res.send('product created successfully');
    });
}


exports.update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (error, product) {
        if (error) return next(error);
        res.send(product);
    });
}


exports.delete = function(req, res) {
    Product.findByIdAndRemove(req.params.id, function (error, product) {
        if (error) return next(error);
        res.send("data has been deleted");
    });
}

exports.detail = function(req, res) {
    Product.findById(req.params.id, function (error, product) {
        if (error) return next(error);
        res.send(product);
    });
}
