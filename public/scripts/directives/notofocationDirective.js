(function () {
  'use strict';

  angular.module('myApp')

  .directive('notificationDirective', function(){
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '/partials/templates/notfication.html',
      scope: {
        group: '@'
      },
      link: function(scope){

      }
    }
  });

})();
