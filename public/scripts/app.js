/** bootstrapping our application
* here we initialize our main module 'myApp'
* and inject an array of dependencies
*/

(function () {
  'use strict';

  var myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/addProduct', {
          templateUrl: '/partials/create_new.html',
          controller: 'createNewProductController'
        })
        .when('/products', {
          templateUrl: '/partials/products.html',
          controller: 'productsListController'
        })
        .otherwise({
          redirectTo: '/products'
        })
    });

})();
