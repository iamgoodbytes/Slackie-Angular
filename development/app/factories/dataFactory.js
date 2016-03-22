angular.module('helloAngular.factories')
    .factory('dataFactory', [

        '$http',

        function dataFactory($http) {

            //
            // FACTORY PROPERTIES --------------------------------------
            //
            var factory = {};
            var url = "http://slackie-api.district01.be/messages/";

            return factory;
        }
    ]);
