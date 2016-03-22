angular.module('helloAngular.controllers')
    .controller('homeController', [

        '$scope',
        '$timeout',
        '$mdSidenav',

        function($scope, $timeout, $mdSidenav) {

            //
            // SCOPE & MODEL PROPERTIES --------------------------------
            //

            $scope.data = {
                messages: [],
                rooms: ["NodeJS", "Angular", "Work", "Sport", "Zever"]
            };

            $scope.toggleLeftNav = function toggleLeftNav() {
                $mdSidenav('left').toggle();
            };

            //
            // EXPOSED METHODS -----------------------------------------
            //

            //
            // PRIVATE METHODS -----------------------------------------
            //

            var scrollToBottom = function scrollToBottom() {
                $timeout(function() {
                    var element = document.getElementById("content");
                    element.scrollTop = element.scrollHeight;
                }, 500);
            };

            var initialize = function initialize() {};

            initialize();
        }
    ]);