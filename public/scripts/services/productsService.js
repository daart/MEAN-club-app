(function () {
  'use strict';

  angular.module('myApp')

    .service('productsService', ['$http', productsService]);

    function productsService($http) {

        function getProducts() {
          // console.log($http.get('/api/products'));
          return $http.get('/api/products');
        }

        function addProduct(prod) {
          return $http.post('/api/products');
          // _products.push(prod);
          // updateStorage();
        }

        function removeProduct(productItem) {
          // if(_products.length > 0) {
          //   _products = _products.filter(function( prodEl ){
          //     return prodEl.id !== productItem;
          //   })
          // }

          // updateStorage();
          // return _products;
        }

        // function updateStorage() {
        //   localStorage.setItem(_storageKey, JSON.stringify(_products));
        // }

        return {
          getProducts: getProducts,
          addProduct: addProduct,
          removeProduct: removeProduct
        }

    }

})();
