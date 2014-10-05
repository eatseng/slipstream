angular.module('UserServices', [
  'ngResource',
  'SlipStreamAPIRoutes'
]).service('UserService', [
  '$resource',
  'userAPI',
  function ($resource, userAPI) {
    var cachedUserData = '';
    this.createUser = function (params, callback) {
      var UserService = '';
      if (cachedUserData === '' || cachedUserData == undefined) {
        UserService = $resource(userAPI + '/create', params, {});
        debugger;
        return UserService.save(params).$promise.then(function (data) {
          cachedUserData = data.user;
          console.log('return data');
          console.log(cachedUserData);
          return callback(data.user);
        }, function (error) {
          return callback(errorMsg);
        });
      } else {
        return callback(cachedUserData);
      }
    };
    return this;
  }
]);