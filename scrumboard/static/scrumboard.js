(function(){
  'use strict';
  angular.module('scrumboard.demo',[])
  .controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

  function ScrumboardController($scope, $http){

    $scope.add = function(list, title){
      var card = {
        title: title
      };//end var card

      //add card to list
      list.cards.push(card);
    }//end $scope.add function

$scope.data = [];
$http.get('/scrumboard/lists').then(function(response){
  $scope.data = response.data;
});//end http.get response

  }//end ScrumboardController()
}());
