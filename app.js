angular.module('angular-spa', [
  'angular-spa.calculator',
  'ngRoute'
])
//Quitar el hash
.config(function($locationProvider) {
  // Habilitar modo html5
  $locationProvider.html5Mode(true);
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './calculator/calculator.html',
    controller: 'CalculatorController'
  })
  /*.otherwise({
    redirectTo: '/'
  });*/
});
