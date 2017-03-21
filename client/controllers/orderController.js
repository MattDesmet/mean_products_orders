app.controller('orderController', ['$scope', function($scope) {
  '$scope',
  'productFactory',
  function($scope, productFactory) {
      function setProducts(data) {
          $scope.products = data;
          $scope.product = {};
      }
      $scope.products = [];

      // $scope.index = function() {
      //     productFactory.index(setProducts);
      // }

      productFactory.index(setProducts);

      $scope.update = function(id) {
          productFactory.update({
              id: id,
              quantity: 1
          }, setProducts);
      }
  }
}
]);
