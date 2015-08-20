angular.module('payment-App.payments',['ngAutocomplete'])

  .controller('paymentController', function($scope, $templateRequest/*, $cookieStore*/) {
    
    $scope.businessID;
    $scope.address;
    $scope.isBusiness = true;
    $scope.payees = []; submit
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

   // return {
   //              restrict: 'A',
   //              template: '<div>{{aCard.name}} {{aCard.phone}}</div>',
   //              replace: true,
   //              transclude: false,
   //              scope: {
   //                  aCard: '=myCard'
   //              }

//set up navbar for completing google searches

// </div>
//   <div class="BusinessName" id="name">{{businessID}}</div>
//   <div class="Address" id="address">{{address}}</div>
//   <button class="ui icon button" id="hoverbox">
//     <i class="dollar icon"></i>
//   </button>
// </div>
  // .directive("topbar", function($compile, $templateRequest){
  // return function(scope, element, attrs){
  //   element.bind("click", function(){
  //     $templateRequest("templates/businessTemplate.html").then(function(html){
  //     var template = angular.element(html);
  //     element.append(template);
  //     $compile(template)(scope);
  //  });
  //   });
  // };