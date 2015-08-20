
var paymentApp = angular.module('payment-App', 
  [
  'ui.router',
  'payment-App.payments',
  '720kb.tooltips',
  'ngAnimate'
  ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/payments')
  // Now set up the states

  $stateProvider
    .state('payments', {
      url: '/payments',
      templateUrl: 'view/payments.html',
      controller: 'paymentController'
    })
  
});


