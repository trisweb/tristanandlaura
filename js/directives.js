app

.directive('countdown', function($interval) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'js/templates/countdown.html',
    controller: function($scope, $timeout) {
      $scope.arrived = false;
      // Countdown
      var thebigday = 'October 22 2016 16:00:00 GMT-04:00';

      updateTime = function(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        $scope.seconds = Math.floor((t/1000) % 60);
        $scope.minutes = Math.floor((t/1000/60) % 60);
        $scope.hours = Math.floor((t/(1000*60*60)) % 24);
        $scope.days = Math.floor(t/(1000*60*60*24));
        return t;
      }
      updateTime(thebigday);

      // Set up the interval
      var timeinterval = $interval(function() {
        var t = updateTime(thebigday);
        if (t <= 0) {
          $interval.cancel(timeinterval);
          $scope.arrived = true;
        }
      }, 1000);

    }
  }
})

.directive('navigation', function($interval) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'js/templates/navigation.html',
    controller: function($scope, $element) { }
  }
})

.directive('imageCarousel', function($interval) {
  var DELAY = 5000;

  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'js/templates/image-carousel.html',
    link: function($scope, element, attr, ctrl, transclude) {
      $scope.images = [];
      $scope.onSecondary = false;

      $scope.nextImage = function() {
        $scope.currentIndex = ($scope.currentIndex + 1) % $scope.images.length;
        if ($scope.onSecondary) {
          // Set primary then transition
          $scope.firstImage = $scope.images[$scope.currentIndex];
          $scope.onSecondary = false;
        } else {
          // Set secondary then transition
          $scope.secondImage = $scope.images[$scope.currentIndex];
          $scope.onSecondary = true;
        }
      };

      transclude($scope, function(clone) {
        $scope.images = clone.filter('img');
        $scope.currentIndex = Math.floor(Math.random() * $scope.images.length);
        $scope.firstImage = $scope.images[$scope.currentIndex];

        $interval($scope.nextImage, DELAY);
      });
    },
    controller: function($scope, $element) {
      $scope.windowHeight = $(window).height();
    }
  }
})

;
