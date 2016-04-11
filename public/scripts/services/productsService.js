(function () {
  'use strict';

  angular.module('myApp')

    .service('productsService', [productsService]);

    function productsService() {

      var
        _storageKey = 'products',
        _products = JSON.parse(localStorage.getItem(_storageKey)) || [];

        function getProducts() {
          return _products;
        }

        function addProduct(prod) {
          _products.push(prod);
          updateStorage();
        }

        function removeProduct(productItem) {
          if(_products.length > 0) {
            _products = _products.filter(function( prodEl ){
              return prodEl.id !== productItem;
            })
          }

          updateStorage();
          return _products;
        }

        function updateStorage() {
          localStorage.setItem(_storageKey, JSON.stringify(_products));
        }

        return {
          getProducts: getProducts,
          addProduct: addProduct,
          removeProduct: removeProduct
        }

    }

})();
