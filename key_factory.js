app.factory('productFactory', [
    '$http',
    function($http) {
        var factory = {};
        var products = [
            {
                name: "hat",
                quantity: 50,
                price: 14.99
            }
        ];
        factory.create = function(data, callback) {
            data.quantity = 50;
            products.push(data);
            callback(products);
        }
        factory.index = function(callback) {
            callback(products);
        }
        factory.update = function(data, callback) {
            if (Number.isInteger(data.quantity)) {
                if (products[data.id].quantity - data.quantity > 0) {
                    products[data.id].quantity -= data.quantity;
                } else {
                    products[data.id].quantity = 0;
                }
            }
            callback(products);
        }
        factory.delete = function(id, callback) {
            products.splice(id, 1);
            callback(products);
        }
        return factory;

    }
])
