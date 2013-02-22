$(document).ready(function () {

// TOOLTIP
    $('.tooltipster').tooltipster({
        maxWidth: 250,
        offsetX: -1,
        offsetY: -3
    });

});

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

dashApp.factory('UsersDaily', function () {
    var UsersDaily = {};
    UsersDaily.list =
        [
            {"status": "offline", "statusinfo": "Offline", "name": "Loreen Smith", "avatar": "images/avatars/avatar-LoreenSmith.jpg", "totaltime": "9h 7m", "timeline": [
                {"timetype": "worktime", "start": 0, "length": 700, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "editedtime", "start": 1000, "length": 900, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "worktime", "start": 23000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 31000, "length": 900, "total": "0:05", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 35000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 42000, "length": 1670, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 48000, "length": 1900, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]},
            {"status": "atention", "statusinfo": "User is not using the software", "name": "Rob Rawson", "avatar": "images/avatars/avatar-RobRawson.jpg", "totaltime": "5h 0m", "timeline": [
                {"timetype": "worktime", "start": 1000, "length": 1300, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "editedtime", "start": 12000, "length": 6600, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "worktime", "start": 30000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 38000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 48000, "length": 9070, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 60000, "length": 2200, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]},
            {"status": "online", "statusinfo": "Current task I’m working on", "name": "Loreen Smith", "avatar": "images/avatars/avatar-LoreenSmith.jpg", "totaltime": "9h 7m", "timeline": [
                {"timetype": "worktime", "start": 0, "length": 7500, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "worktime", "start": 9000, "length": 7400, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "worktime", "start": 23000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 31000, "length": 900, "total": "0:05", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "editedtime", "start": 35000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 42000, "length": 1670, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 48000, "length": 1900, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]},
            {"status": "onbreak", "statusinfo": "On a break", "name": "Rob Rawson", "avatar": "images/avatars/avatar-RobRawson.jpg", "totaltime": "5h 0m", "timeline": [
                {"timetype": "worktime", "start": 1000, "length": 1300, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "worktime", "start": 12000, "length": 6600, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "editedtime", "start": 30000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 38000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 48000, "length": 9070, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 60000, "length": 2200, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]},
            {"status": "offline", "statusinfo": "Offline", "name": "Loreen Smith", "avatar": "images/avatars/avatar-LoreenSmith.jpg", "additionalstatus": {"icon": "type1", "text": "Lorem ipsum."}, "totaltime": "9h 7m", "timeline": [
                {"timetype": "worktime", "start": 0, "length": 7500, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "worktime", "start": 9000, "length": 7400, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "editedtime", "start": 23000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 31000, "length": 900, "total": "0:05", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "editedtime", "start": 35000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 42000, "length": 1670, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 48000, "length": 1900, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]},
            {"status": "atention", "statusinfo": "User is not using the software", "name": "Rob Rawson", "avatar": "images/avatars/avatar-RobRawson.jpg", "additionalstatus": {"icon": "type1", "text": "Lorem ipsum dolor sit."}, "totaltime": "5h 0m", "timeline": [
                {"timetype": "worktime", "start": 1000, "length": 1300, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "worktime", "start": 12000, "length": 6600, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "worktime", "start": 30000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 38000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 48000, "length": 9070, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 60000, "length": 2200, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]},
            {"status": "online", "statusinfo": "Current task I’m working on", "name": "Loreen Smith", "avatar": "images/avatars/avatar-LoreenSmith.jpg", "totaltime": "9h 7m", "timeline": [
                {"timetype": "worktime", "start": 0, "length": 7500, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "worktime", "start": 9000, "length": 7400, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "worktime", "start": 23000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 31000, "length": 900, "total": "0:05", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 35000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 42000, "length": 1670, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 48000, "length": 1900, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]},
            {"status": "onbreak", "statusinfo": "On a break", "name": "Rob Rawson", "avatar": "images/avatars/avatar-RobRawson.jpg", "additionalstatus": {"icon": "type2", "text": "Lorem ipsum dolor."}, "totaltime": "5h 0m", "timeline": [
                {"timetype": "worktime", "start": 1000, "length": 1300, "total": "2:10", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {"timetype": "worktime", "start": 12000, "length": 6600, "total": "3:00", "message": "Lorem ipsum dolor sit amet."},
                {"timetype": "worktime", "start": 30000, "length": 3000, "total": "1:05", "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum error ratione."},
                {"timetype": "worktime", "start": 38000, "length": 5000, "total": "1:00", "message": "Lorem ipsum dolor sit."},
                {"timetype": "worktime", "start": 48000, "length": 9070, "total": "1:15", "message": "Lorem ipsum dolor sit amet, consectetur."},
                {"timetype": "worktime", "start": 60000, "length": 2200, "total": "0:40", "message": "Lorem ipsum dolor sit."}
            ]}
        ]
    return UsersDaily;
})

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


function UsersDailyCtrl($scope, UsersDaily) {
    $scope.usersdaily = UsersDaily;
}