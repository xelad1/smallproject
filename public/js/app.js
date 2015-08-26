
var paymentApp = angular.module('payment-App', 
  [
  'ui.router',
  'payment-App.payments',
  '720kb.tooltips'
  ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/payments')

  $stateProvider
    .state('payments', {
      url: '/payments',
      templateUrl: 'view/payments.html',
      controller: 'paymentController'
    })
  
});


