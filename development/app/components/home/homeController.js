angular.module('helloAngular.controllers')
    .controller('homeController', [

        '$scope',
        '$timeout',
        '$interval',
        '$mdSidenav',

        'dataService',
        'dataFactory',

        function($scope, $timeout, $interval, $mdSidenav, dataService, dataFactory) {

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

            $scope.sendMessage = function sendMessage() {
                if ($scope.data.message) {
                    var message = {
                        name: dataService.name,
                        room: dataService.room,
                        content: $scope.data.message
                    };
                    dataFactory.postMessage(message).success(function(result) {
                        $scope.data.messages.push(result);
                        scrollToBottom();
                    });
                    $scope.data.message = "";
                }
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

            var initialize = function initialize() {
                $interval(function() {
                    getMessages();
                }, 1000);
            };

            initialize();
        }
    ]);