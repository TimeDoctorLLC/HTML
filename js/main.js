var dashApp = angular.module('dashApp', ['$strap.directives']).
    config(function ($routeProvider) {
        $routeProvider.
            when("/daily",  {templateUrl: "/partials/dash-daily.html", controller: "UsersDailyCtrl"}).
            when("/weekly", {templateUrl: "/partials/dash-weekly.html", controller: "UsersWeeklyCtrl"}).
            otherwise({redirectTo: '/daily'});
    }
);

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

function UsersDailyCtrl($scope, $http, $location) {

    // todo: rewrite
    $scope.updateData = function (data) {
        $scope.usersdaily.list = data;

        // TOOLTIP
        // todo: find a better place for it
        setTimeout(function(){
            $('.tooltipster').tooltipster({
                maxWidth: 250,
                offsetX: -1,
                offsetY: -3
            });
            var endDate = new Date(2012,1,25);
            $('#date-end')
                .datepicker()
                .on('changeDate', function(ev){
                    endDate = new Date(ev.date);
                    $('#date-end').datepicker('hide');
                    $('#date-end').text($('#date-end').data('date'));
                });
        }, 500);
    }

    $scope.reportView = 'daily';

    // init as empty
    $scope.usersdaily = {};

    $http.get('/data/team-day.json').success(function(data) {
        $scope.updateData(data);
    });

    $scope.change = function (view) {
        $http.get('/data/team-day.json?date=' + $scope.datepicker.date).success(function (data) {
            $scope.updateData(data);
        });
    };
}

function UsersWeeklyCtrl($scope, $http, $location) {
    $scope.reportView = 'weekly';

    // init as empty
    $scope.usersWeekly = {};

    $http.get('/data/team-day.json').success(function(data) {
        $scope.usersWeekly.list = data;
    });

    // TOOLTIP
    // todo: find a better place for it
    setTimeout(function(){
        $('.tooltipster').tooltipster({
            maxWidth: 250,
            offsetX: -1,
            offsetY: -3
        });
    }, 1000);

}