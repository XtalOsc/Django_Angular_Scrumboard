(function(){
  'use strict';
  angular.module('scrumboard.demo',[])
  .controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

  function ScrumboardController($scope, $http){

    $scope.add = function(list, title){
      var card = {
        list: list.id,
        title: title
      };//end var card
      $http.post('/scrumboard/cards/', card)
      .then(function(response){
        //add card to list
        list.cards.push(response.data);
      },
      //if error alert user
      function(){
        alert('Could not create card');
      });//end $http.post
    };//end $scope.add function

    $scope.data = [];
    $http.get('/scrumboard/lists/').then(function(response){
      $scope.data = response.data;
    });//end http.get response

  }//end ScrumboardController()
}());
