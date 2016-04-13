(function () {
  'use strict';

  angular.module('myApp')

  .controller('navController', ['$scope', '$location', navController]);

  function navController ( $scope, $location ) {
    $scope.isActive = function(url) {
      return $location.path() === url;
      // return url === location.hash.slice(1);

    };
  }

})();
