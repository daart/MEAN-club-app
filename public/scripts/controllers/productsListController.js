(function(){

  'use strict';

  angular.module('myApp')

  .controller('productsListController', ['$scope', 'productsService', productsListController]);

  function productsListController( $scope, productsService ) {
    $scope.products = productsService.getProducts();
    $scope.orderProperty = '';
    $scope.orderReversed = true;
    $scope.asd = 'asd';

    $scope.setOrderProperty = function(prop) {
      if($scope.orderProperty === prop) {
        $scope.orderReversed = !$scope.orderReversed;
        console.log($scope.orderReversed);
        
      } else {
        $scope.orderReversed = false;
        $scope.orderProperty = prop;
      }
      console.log($scope.orderReversed);
    }

    $scope.deleteProduct = function(prodId) {
      $scope.products = productsService.removeProduct(prodId);
    };

  }

})();
