'use strict';

angular.module("customAutocomplete", []) {
  .directive("customAutocomplete", function () {
    return {
      require: 'ngModel',
      scope: {
        ngModel: '=',
        options: '=?',
        details: '=?'
      },

      link: function ($scope, els, attributes, controller) {


        
      }
    }
  })

}
