(function(){
  'use strict';
  angular.module('scrumboard.demo',[])
  .controller('ScrumboardController', ScrumboardController);

  function ScrumboardController($scope){

    $scope.add = function(list, title){
      var card = {
        title: title
      };//end var card

      //add card to list
      list.cards.push(card);
    }//end $scope.add function

    $scope.data = [
      {
        name: 'Django demo',
        cards: [
          {
            title: 'Create Models'
          },
          {
            title: 'Create View'
          },
          {
            title: 'Migrate Database'
          },
        ]//end cards
      },//end 'Django demo'
      {
        name: 'Angular demo',
        cards: [
          {
            title: 'Write HTML'
          },
          {
            title: 'Write Javascript'
          },
        ]//end cards
      }//end 'Angular demo'
    ]//end $scope.data
  }//end ScrumboardController()
}());
