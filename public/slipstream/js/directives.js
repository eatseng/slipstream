angular.module('SlipstreamDirectives', []).directive('navbar', [function () {
    return {
      restrict: 'E',
      templateUrl: '../slipstream/views/directives/navbar.html',
      link: function (scope, element, attrs) {
      }
    };
  }]);