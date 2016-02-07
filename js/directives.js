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

;
