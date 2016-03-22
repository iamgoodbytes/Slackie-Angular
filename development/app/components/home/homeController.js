angular.module('helloAngular.controllers')
    .controller('homeController', [

        '$scope',
        '$timeout',
        '$mdSidenav',

        'dataService',

        function($scope, $timeout, $mdSidenav, dataService) {

            //
            // SCOPE & MODEL PROPERTIES --------------------------------
            //

            $scope.data = {
                messages: [],
                rooms: ["NodeJS", "Angular", "Work", "Sport", "Zever"]
            };
            $scope.dataService = dataService;

            $scope.toggleLeftNav = function toggleLeftNav() {
                $mdSidenav('left').toggle();
            };

            $scope.toggleRoom = function toggleRoom(room) {
                dataService.room = room;
                $scope.toggleLeftNav();
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