(function(){
  'use strict';

//retrieve module and add a directive
  angular.module('scrumboard.demo')
  .directive('scrumboardCard', CardDirective);

  function CardDirective() {
    return {
      templateUrl: '/static/card.html',
      //bound by a HTML element
      restrict: 'E'
    };//end return object
  }//end CardDirective()
})();//end card.directive.js
