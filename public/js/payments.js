angular.module('payment-App.payments',['myCustom', 'ngFx', 'ngAnimate'])

  .controller('paymentController', function($scope) {
    
    $scope.businessID;
    $scope.address;
    $scope.payees = [];
    $scope.people = [];

})
  
  .directive("ngFinder", function() {
  return {
    restrict: "A",
    templateUrl: 'templates/finder.html',
    scope: {
      payees: '=ngPayees',
      people: '=ngPeople',
    },

    link: function($scope, el, attributes) {

    if ($scope.isBusiness === undefined) {
      $scope.isBusiness = true;
    };

    $scope.newPayee = function () {
      this.businessID = $scope.businessID;
      this.address = $scope.address;
    }

    $scope.submit = function () {
      var text = document.getElementById("businessID").value.split(",");
      $scope.businessID = text[0];
      $scope.address = text.slice(1).join("");
      $scope.newPayee();
    }

    
    $scope.addPayee = function () {
      $scope.submit();
      if ($scope.isBusiness) {
        $scope.payees.push(new $scope.newPayee());
      } else {
        $scope.people.push(new $scope.newPayee());
      }
    }

    $scope.selectBusiness = function () {
      $scope.isBusiness = true;
      document.getElementById("selectPerson").className = "personButton";
      document.getElementById("selectBusiness").className = "businessButton";
    }

    $scope.selectPerson = function () {
      $scope.isBusiness = false;
      document.getElementById("selectBusiness").className = "businessButtonInverted";
      document.getElementById("selectPerson").className = "personButtonInverted"; 
    }

  }

  }
})

