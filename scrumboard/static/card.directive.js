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

        //Update card
        $scope.update = function() {
          $http.put(
            url,
            $scope.card
          );//end $http.put
        };//end $scope.update function

        //Delete card
        $scope.delete = function(){
          $http.delete(url).then(
            function(){
              var cards = $scope.list.cards;
              cards.splice(
                cards.indexOf($scope.card),
                1
              );//end cards.splice
            }//end function
          );//end .then return
        };//end $scope.delete function

        //Debounce
        $scope.modelOptions = {
          debounce: 500
        };//end $scope.modelOptions

      }]//end controller
    };//end return object
  }//end CardDirective()
})();//end card.directive.js
