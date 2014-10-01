/* Global Firebase */
'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseApp
 */
angular.module('firebaseApp')
  .controller('MainCtrl', function ($scope) {
    var rootRef = new Firebase('https://shining-torch-2720.firebaseio.com/');

    $scope.setMessage = function() {
      rootRef.child('message').set({
        user: 'Bob',
        text: 'Hi'
      });
    }
  });
