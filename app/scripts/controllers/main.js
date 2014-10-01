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
  .controller('MainCtrl', function ($scope, $timeout) {
    var rootRef = new Firebase('https://shining-torch-2720.firebaseio.com/');
    var childRef = rootRef.child('message');

    childRef.on('value', function(snapshot) {
      $timeout(function() {
        console.log(snapshot.hasChild('text'));
        console.log(snapshot.numChildren());
        snapshot.forEach(function(item) {
          console.log(item.name() + ' - ' +  item.val());
          console.log(item.ref());
        });
        var snapshotVal =  snapshot.val();
        console.log(snapshotVal);
        $scope.message = snapshot.val();
      });
    });

    $scope.$watch('message.text', function(newVal) {
      if (!newVal) {
        return;
      }
      childRef.update({
        text: newVal
      });
    });

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
