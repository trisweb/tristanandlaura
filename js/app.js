// Setup
// Initialize Fastclick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
    console.log("FastClick initialized.");
  }, false);
}
// Main App
// This will have to be merged back with the stuff at home...
var app = angular.module('Love', [
  'ngRoute', 'ngAnimate'
])

// Controllers

// <li><a href="#/">Home</a></li>
// <li><a href="#/about">Our Story</a></li>
// <li><a href="#/people">People</a></li>
// <li><a href="#/events">Events</a></li>
// <li><a href="#/travel">Travel &amp; Lodging</a></li>
// <li><a href="#/activities">Things to Do</a></li>
// <li><a href="#/registry">Registry</a></li>
// <li><a href="#/photos">Photos</a></li>

.controller('Main', function($scope, $rootScope, $document, $timeout, $location) {
  console.log("~~~~~~~~ <3 <3 <3 ~~~~~~~~");
})
.controller('HomeCtrl', function($scope) {
})
.controller('AboutCtrl', function($scope) {
})
.controller('PeopleCtrl', function($scope) {
})
.controller('EventsCtrl', function($scope) {
})
.controller('TravelCtrl', function($scope) {
})
.controller('ActivitiesCtrl', function($scope) {
})
.controller('RegistryCtrl', function($scope) {
})
.controller('PhotosCtrl', function($scope) {
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
        templateUrl: 'js/views/about.html',
        controller: 'AboutCtrl'
      }).
      when('/people', {
        templateUrl: 'js/views/people.html',
        controller: 'PeopleCtrl'
      }).
      when('/events', {
        templateUrl: 'js/views/events.html',
        controller: 'EventsCtrl'
      }).
      when('/travel', {
        templateUrl: 'js/views/travel.html',
        controller: 'TravelCtrl'
      }).
      when('/activities', {
        templateUrl: 'js/views/activities.html',
        controller: 'ActivitiesCtrl'
      }).
      when('/registry', {
        templateUrl: 'js/views/registry.html',
        controller: 'RegistryCtrl'
      }).
      when('/photos', {
        templateUrl: 'js/views/photos.html',
        controller: 'PhotosCtrl'
      })
    ;
  }])

;
