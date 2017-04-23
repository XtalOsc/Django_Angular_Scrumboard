(function(){
  'use strict';

//retrieve module and add a directive
  angular.module('scrumboard.demo')
  .directive('scrumboardCard', CardDirective);

  function CardDirective() {
    return {
      templateUrl: '/static/card.html',
      //bound by a HTML element
      restrict: 'E',
      controller: ['$scope','$http', function($scope, $http) {
        var url = 'scrumboard/cards/' + $scope.card.id + '/';
        $scope.update = function() {
          $http.put(
            url,
            $scope.card
          );//end $http.put
        };//end $scope.update function
        $scope.modelOptions = {
          debounce: 500
        };//end $scope.modelOptions
      }]//end controller
    };//end return object
  }//end CardDirective()
})();//end card.directive.js
