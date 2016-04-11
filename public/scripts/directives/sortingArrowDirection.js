(function () {
  'use strict';

  angular.module('myApp')

    .directive('arrowdirection', function(){
      return {
        restrict: 'EA',
        templateUrl: '/partials/templates/arrow.html',
        scope: {
          direction: '@'
        }
      }
    });

})();
