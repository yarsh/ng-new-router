(function () {
	'use strict';

	/**
	 * Users Service
	 */
	angular.module('myapp')
		.factory('UsersService', UsersService);

	function UsersService() {
		return {
			get: get
		};

		function get () {
			return [
				{
					username: 'batman',
					roles: ['admin', 'user']
				},
				{
					username: 'spiderman',
					roles: ['user']
				}
			];
		}
	}

})();