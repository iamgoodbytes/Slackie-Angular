angular.module('helloAngular.controllers')
    .controller('homeController', [

        '$scope',
        '$timeout',
        '$mdSidenav',

        'dataService',
        'dataFactory',

        function($scope, $timeout, $mdSidenav, dataService, dataFactory) {

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
                getMessages();
                $scope.toggleLeftNav();
            };

            //
            // EXPOSED METHODS -----------------------------------------
            //

            //
            // PRIVATE METHODS -----------------------------------------
            //

            var getMessages = function getMessages() {
                if (dataService.room !== '') {
                    dataFactory.getMessagesByRoom(dataService.room).success(function(data) {
                        $scope.data.messages = data;
                        scrollToBottom();
                    });
                }
            };

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