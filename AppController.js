(function() {
'use strict';

/**
 * App Controller
 */
angular
  .module('myapp')
  .controller('AppController', Controller);


Controller.$inject = [
  '$router',
  '$location'
];

function Controller($router, $location) {
  $router.config([
    { path: '/home', component: 'home' },
    { path: '/users', component: 'users' },
    { path: '/', redirectTo: '/home' }
  ]);
  $location.path('/'); //set default otherwise is blank
}

})();