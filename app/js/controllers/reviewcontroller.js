
angular.module('myApp.controllers')
	.controller('reviewcontroller', ['$scope', 'reviewProvider', '$routeParams','$location', 
		function($scope, reviewProvider, $routeParams,$location) {

			$scope.addReview = function(review, addReviewForm) {
				var courseId=$routeParams.id;
				if (addReviewForm.$invalid) {
					alert('validation failed');
				} else {
					console.log(review);
					review.course_id=courseId;
					reviewProvider.add(review);
					
					console.log('saving review : ' + review.rev);
					$location.url('/details/'+courseId);
				}
			}

		}
	]);