angular.module('SlipstreamController', []).controller('SlipstreamCtlr', [
  '$scope',
  function ($scope) {
    $scope.message = 'HELLO WORLD FROM CONTROLLER';
    $scope.signUp = function (event) {
      angular.element('#signup').addClass('active');
      angular.element('#signin').removeClass('active');
      angular.element('#signup-form').css('display', 'inline');
      angular.element('#signin-form').css('display', 'None');
    };
    $scope.signIn = function (event) {
      console.log('SLDFJDSL:KFJ');
      angular.element('#signup').removeClass('active');
      angular.element('#signin').addClass('active');
      angular.element('#signin-form').css('display', 'inline');
      angular.element('#signup-form').css('display', 'None');
    };
  }
]);