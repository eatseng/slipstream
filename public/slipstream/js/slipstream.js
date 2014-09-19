angular.module('slipstream', [
  'ngRoute',
  'ngResource',
  'SlipstreamController',
  'SlipstreamDirectives'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: '../slipstream/views/index.html',
      controller: 'SlipstreamCtlr'
    }).otherwise({ templateUrl: '../slipstream/views/404_not_found.html' });
  }
]);