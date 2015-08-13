angular.module('payment-App.payments',[/*'ngCookies'*/'ngAutocomplete'])

  .controller('paymentController', function($scope/*, $cookieStore*/) {
    
    $scope.businessID;
    $scope.address;
    $scope.isBusiness = false;

    $scope.submit = function () {
      var text = document.getElementById("businessID").value.split(",");
      $scope.businessID = text[0];
      $scope.address = text.slice(1).join("");
      $('.payments').appendTemplate('.Business');
    }

    $scope.selectBusiness = function () {
      //turns on autocomplete;
      $scope.isBusiness = true;
      console.log("Selecting Business")
    }

    $scope.selectPerson = function () {
      //turns off autocomplete
      $scope.isBusiness = false;
      console.log("Selecting Person")
    }

    $scope.fillAddress = function () {
      // body...
    }


    $scope.templates = 
      [ {
        name: 'businessTemplate.html', url: '/templates/businessTemplate.html',
        name: 'personTemplate.html', url: '/templates/personTemplate.html'
      }];

    $scope.template = $scope.templates[0];
    console.log($scope.template);

    return {

    }

})

  .directive('customer', function() {


  })

//set up navbar for completing google searches
