// Main App
// This will have to be merged back with the stuff at home...
var app = angular.module('Love', [
  'ngRoute', 'ngAnimate', 'slick'
])

// Controllers
.controller('Main', function($scope, $rootScope, $document, $timeout, $location) {
  console.log("~~~~~~~~ <3 <3 <3 ~~~~~~~~");
})
.controller('HomeCtrl', function($scope) {

})
.controller('AboutCtrl', function($scope) {

})

// Routes and Navigation
.config(['$routeProvider', '$controllerProvider',
  function($routeProvider, $controllerProvider) {
    $controllerProvider.allowGlobals();
    $routeProvider.
      // Home
      when('/', {
        templateUrl: 'js/views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'js/views/aboutus.html',
        controller: 'AboutCtrl'
      })
    ;
  }])

;
