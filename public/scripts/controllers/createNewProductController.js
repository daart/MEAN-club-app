(function () {
  'use strict';

  angular.module('myApp')

  .controller('createNewProductController', ['$scope', 'productsService', createNewProductController]);

  function createNewProductController ( $scope, productsService ) {

    $scope.formData = {};

    $scope.handleFormSubmit = function(){
      if($scope.addForm.$valid) {
        productsService.addProduct(_serializeForm());
      }

      $scope.formData = {};
      $scope.addForm.$setPristine();

    }

    function _serializeForm() {
      return {
        id: $scope.formData.id,
        name: $scope.formData.name,
        snippet: $scope.formData.snippet,
        price: $scope.formData.price
      }
    }
  }

})();
