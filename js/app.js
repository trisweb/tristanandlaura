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
  console.log("~~~~~~~~ <3 Tristan ~*&*~ Laura <3 ~~~~~~~~");
  console.log("If you're interested in the source code of this site, check out https://github.com/trisweb/tristanandlaura");

  // Scroll to top on route change:
  $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
    if (previousRoute !== undefined) {
      window.scrollTo(0, 0);
    }
  });
})
.controller('HomeCtrl', function($scope) {
  $scope.currentPage = 'home';
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
  $scope.activities = ACTIVITY_LIST;

  $scope.scrollTo = function(id, event) {
    elt = $('#'+id);
    console.log(id, elt);
    if (elt) {
      $('html, body').animate({ scrollTop: elt.offset().top - 65 }, 300);
    }
  };

  $scope.underscore = function(name) {
    name = name.replace(/(?:^|\s)\w/g, function(match) {
      return match.toLowerCase();
    });
    name = name.replace(/\W+/g, "_");
    return name;
  };
})
.controller('RegistryCtrl', function($scope) {
})

// Routes and Navigation
.config(['$routeProvider', '$controllerProvider',
  function($routeProvider, $controllerProvider) {
    $controllerProvider.allowGlobals();
    $routeProvider.
      // Home
      when('/', {
        templateUrl: 'js/views/home.html',
        controller: 'HomeCtrl',
        name: 'home'
      }).
      when('/about', {
        templateUrl: 'js/views/about.html',
        controller: 'AboutCtrl',
        name: 'about'
      }).
      when('/people', {
        templateUrl: 'js/views/people.html',
        controller: 'PeopleCtrl',
        name: 'people'
      }).
      when('/events', {
        templateUrl: 'js/views/events.html',
        controller: 'EventsCtrl',
        name: 'events'
      }).
      when('/travel', {
        templateUrl: 'js/views/travel.html',
        controller: 'TravelCtrl',
        name: 'travel'
      }).
      when('/activities', {
        templateUrl: 'js/views/activities.html',
        controller: 'ActivitiesCtrl',
        name: 'activities'
      }).
      when('/registry', {
        templateUrl: 'js/views/registry.html',
        controller: 'RegistryCtrl',
        name: 'registry'
      })
    ;
  }])

;
