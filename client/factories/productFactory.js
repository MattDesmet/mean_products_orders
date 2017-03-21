app.factory('productFactory', ['$http', function($http) {
          var factory = {};
          var products = [
          // {
          //     name: "ipad",
          //     quantity: 50,
          //     price: 200.00
          // }
          ];
          factory.create = function(data, cb) {
              data.quantity = 50;
              products.push(data);
              console.log(data);
              cb(products);
          }
          factory.index = function(cb) {
              cb(products);
          }
          factory.update = function(data, cb) {
              // if (typeof data.quantity==Number) {
                if (Number.isInteger(data.quantity)) {
                    console.log(data);
                  if (products[data.id].quantity - data.quantity > 0) {
                      products[data.id].quantity -= data.quantity;
                  } else {
                      products[data.id].quantity = 0;
                  }
              }
              cb(products);
          }
          factory.delete = function(id, cb) {
              products.splice(id, 1);
              cb(products);
          }
          return factory;

      }
  ])
