angular.module('payment-App.payments',['ngAutocomplete', 'ngFx', 'ngAnimate'])

  .controller('paymentController', function($scope) {
    
    $scope.businessID;
    $scope.address;
    $scope.isBusiness = true;
    $scope.payees = [];
    $scope.people = [];

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
      document.getElementById("selectPerson").className = "left attached ui button submit";
      document.getElementById("selectBusiness").className = "left attached blue ui button submit";
    }

    $scope.selectPerson = function () {
      $scope.isBusiness = false;
      document.getElementById("selectBusiness").className = "left attached ui button submit";
      document.getElementById("selectPerson").className = "left attached blue ui button submit";
      
    }

})
  
  .directive("topbar", function(){
  return {
    restrict: "A",
    templateUrl: '<div>{{aCard.businessID}} {{aCard.address}}</div>',
    replace: true,
    transclude: false,
    scope: {
      businessID: '=topbar'
    }
  }
})