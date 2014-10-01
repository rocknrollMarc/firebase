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
    var childRef = rootRef.child('message');

    // https://shining-torch-2720.firebaseio.com/message
    $scope.setMessage = function() {
      rootRef.child('message').set({
        user: 'Bob',
        text: 'Hi'
      });
    }

    $scope.updateMessage = function() {
      childRef.set({
        lastname: 'Smith'
      });
    };

    $scope.deleteMessage = function() {
      childRef.remove();
    };
  });
