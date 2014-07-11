angular.module('myApp.controllers')
	.controller('listingcontroller', ['$scope', 'settings', 'courseProvider', 'reviewProvider','$location',
		function($scope, settings, courseProvider, reviewProvider,$nonsense) {
			
			$scope.maxLength = settings.maxDescriptionLength;
			$scope.maxResults = settings.maxResults;
			courseProvider.getCourses().$promise.then(function(data){
	 		$scope.courses=data;
			});
			
			$scope.showCourseDetails = function(course){
				courseProvider.selectedCourse = course;
				$nonsense.url('/details');
			}
			/*var courseId = course.id
			$scope.rating=reviewProvider.getavg(courseId);
			console.log(rating);*/
		}
	]);