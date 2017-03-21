app.controller('controller', [
    '$scope',
    'productFactory',
    function($scope, productFactory) {
        // callback, but not as an anonymous function, rather a named function!
        function setProducts(data) {
            $scope.products = data;
            $scope.product = {};
        }

        $scope.product = {};
        $scope.products = [];

        $scope.index = function() {
            productFactory.index(setProducts);
        }
        $scope.index();

        $scope.create = function() {
            productFactory.create($scope.product, setProducts);
        }

        $scope.delete = function(id) {
            productFactory.delete(id, setProducts);
        }

    }
]);

app.controller('ordersController', [
    '$scope',
    'productFactory',
    function($scope, productFactory) {
        function setProducts(data) {
            $scope.products = data;
            $scope.product = {};
        }
        $scope.products = [];

        productFactory.index(setProducts);
        $scope.update = function(id) {
          console.log(`This is the ID: ${id}`);
            productFactory.update({
                id: id,
                quantity: 1
            }, setProducts);
        }
    }
]);
