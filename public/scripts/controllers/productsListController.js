(function(){

  'use strict';

  angular.module('myApp')

  .controller('productsListController', ['$scope', '$http', 'productsService', productsListController]);

  function productsListController( $scope, $http, productsService ) {
    $scope.orderProperty = '';
    $scope.orderReversed = true;

    productsService.getProducts()
      .then( function( res ) {
        $scope.products = res.data;
        console.log($scope.products);
    });

    $scope.setOrderProperty = function(prop) {
      if($scope.orderProperty === prop) {
        $scope.orderReversed = !$scope.orderReversed;

      } else {
        $scope.orderReversed = false;
        $scope.orderProperty = prop;
      }
    }

    // $scope.deleteProduct = function(prodId) {
    //   $scope.products = productsService.removeProduct(prodId);
    // };

  }

})();
