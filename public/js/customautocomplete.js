'use strict';

angular.module("myCustom", [])
  .directive("myCustom", function () {
    return {
      require: 'ngModel',
      scope: {
        ngModel: '=',
        options: '=?',
        details: '=?'
      },

      link: function (scope, els, attributes, controller) {

        scope.googleMaps = new google.maps.places.Autocomplete(els[0], {});

        controller.$render = function () {
          var addresses = controller.$viewValue;
          els.val(addresses);
        }
        
      }
    }
  });