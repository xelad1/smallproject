angular.module('payment-App.payments',['ngAutocomplete', 'ngFx', 'ngAnimate'])

  .controller('paymentController', function($scope) {
    
    $scope.businessID;
    $scope.address;
    $scope.payees = [];
    $scope.people = [];


})
  
  .directive("ngFinder", function(){
  return {
    restrict: "A",
    templateUrl: 'templates/finder.html',
    scope: {
      payees: '=ngPayees',
      people: '=ngPeople'
    },

    //look up link property of directives args
    link: function($scope, el, attributes) {

    //was not accessible in controller (why?????)
    $scope.isBusiness = true;


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

  }
    



  }
})

//Notes:
//Make pixel perfect to psd (use Photoshop here)
//Add in proper fonts
//Write custom angular autocomplete directive

