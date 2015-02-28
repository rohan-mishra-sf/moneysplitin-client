'use strict';

// Declare app level module which depends on filters, and services
angular.module('ngdemo', ['ngdemo.filters', 'ngdemo.services', 'ngdemo.directives', 'ngdemo.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dummy', {templateUrl: 'partials/dummy.html', controller: 'DummyCtrl'});
        $routeProvider.when('/user-list', {templateUrl: 'partials/user-list.html', controller: 'UserListCtrl'});
        $routeProvider.when('/user-detail/:id', {templateUrl: 'partials/user-detail.html', controller: 'UserDetailCtrl'});
        $routeProvider.when('/user-creation', {templateUrl: 'partials/user-creation.html', controller: 'UserCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/dummy'});
    }]);


angular.module('myApp', ['ngFacebook'])
.config(['$facebookProvider', function($facebookProvider) {
         $facebookProvider.setAppId('1592690444299818').setPermissions(['email','user_friends']);
         }])
.run(['$rootScope', '$window', function($rootScope, $window) {
      (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s); js.id = id;
       js.src = "http://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
      $rootScope.$on('fb.load', function() {
                     $window.dispatchEvent(new Event('fb.load'));
                     });
      }])
.controller('myCtrl', ['$scope', '$facebook', function($scope, $facebook) {
                       $scope.$on('fb.auth.authResponseChange', function() {
                                  $scope.status = $facebook.isConnected();
                                  if($scope.status) {
                                  $facebook.api('/me').then(function(user) {
                                                            $scope.user = user;
                                                            });
                                  }
                                  });
                       
                       $scope.loginToggle = function() {
                       if($scope.status) {
                       $facebook.logout();
                       } else {
                       $facebook.login();
                       }
                       };
                       
                       $scope.getFriends = function() {
                       if(!$scope.status) return;
                       $facebook.cachedApi('/me/friends').then(function(friends) {
                                                               $scope.friends = friends.data;
                                                               });
                       }
                       }])
;