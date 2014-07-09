angular.module('myApp.controllers')
	.controller('detailcontroller', ['$scope', 'courseProvider', 'reviewProvider','settings', '$routeParams', 
		function($scope, courseProvider, reviewProvider,settings, $routeParams) {

			var courseId = $routeParams.id;
			/*var reviewratings=reviewProvider.avg();
			console.log(reviewratings);*/
			var myreviews=[];
			var date=[];
			reviewProvider.get(courseId).
			$promise.then(function(data){
				angular.forEach(data,function(item,index){
					if(item.course_id==courseId)
						myreviews.push(item);
						/*$scope.date=item.createdAt;*/
				});
				$scope.reviews= myreviews;
				$scope.avg=reviewProvider.getavg(myreviews);


			})


			var promise = courseProvider.get(courseId);

			promise.then(function(data){
				$scope.course = data;
			})

			$scope.maxLength = settings.maxDescriptionLength;
			$scope.reviews=reviewProvider.get(courseId);

		}
	]);

