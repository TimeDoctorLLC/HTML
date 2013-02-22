var dashApp = angular.module('dashApp', []);

dashApp.filter('timeline', function () {
    return function (data) {
        return '<span>1</span>1';
    }
})

dashApp.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
            input.push(i);
        return input;
    };
});

dashApp.filter('isTwoHourRange', function() {
    return function(input, hour) {
        hour = parseInt(hour)
        var out = [];
        for (var i = 0; i < input.length; i++){
            if(input[i].start >= hour * 3600 && input[i].start < ((hour+2) * 3600)) {
                out.push(input[i]);
            }

        }
        return out;
    };
});

// may be used like <div two-hours-time-bar hour="foo"></div>
dashApp.directive('twoHoursTimeBar', function () {
    return {
        restrict: 'A',
        scope: {
            hour: '@',
            timeline: "="
        },
        template: '<div ng-repeat="time_entry in timeline | isTwoHourRange:hour" class="timebar timebar-{{time_entry.timetype}} tooltipster" style="width: {{time_entry.length / 72}}%; left: {{(time_entry.start % 7200) / 7200 * 100}}%;" title="<p><b>{{time_entry.message}}</b></p> {{time_entry.total}}"></div>'
    };
});


function UsersDailyCtrl($scope, $http) {
    // init as empty
    $scope.usersdaily = {};

    $http.get('/data/team-week.json').success(function(data) {
        $scope.usersdaily.list = data;
    });

    // TOOLTIP
    // todo: find a better place for it
    $('.tooltipster').tooltipster({
        maxWidth: 250,
        offsetX: -1,
        offsetY: -3
    });

}