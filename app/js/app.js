'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'ngResource',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers','ngSanitize']).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller: 'listingcontroller'
		});
		$routeProvider.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'newcontroller'
		});
		$routeProvider.when('/newview', {
			templateUrl: 'partials/newview.html',
			controller: 'listingcontroller'
		});
		$routeProvider.when('/details/:id', {
			templateUrl: 'partials/details.html',
			controller: 'detailcontroller'
		});
		$routeProvider.when('/addReview/:id', {
			templateUrl: 'partials/addReview.html',
			controller: 'reviewcontroller'
		});
		$routeProvider.otherwise({
			redirectTo: '/listing'
		});
	}
]);

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);