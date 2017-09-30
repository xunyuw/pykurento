var kurento_room = angular.module('kurento_room', ['ngRoute', 'FBAngular', 'lumx', 'angular-clipboard']);

kurento_room.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
        .when('/', {
            templateUrl: '/login',
            controller: 'loginController'
        })
        .when('/login', {
            templateUrl: '/login',
            controller: 'loginController'
        })
        .when('/rooms/:existingRoomName', {
            templateUrl: '/login',
            controller: 'loginController'
        })
        .when('/call', {
            templateUrl: 'angular/call/call.html',
            controller: 'callController',
            resolve: {
                factory: checkRouting
            }
        })
        .otherwise('/'); //redirect to login
}]);

var checkRouting= function ($rootScope, $location) {
   if ($rootScope.isParticipant) {
       return true;
   } else {
       console.log('Not a participant, routing to login');
       $location.path($rootScope.contextpath + '/');
       return false;
   }
};