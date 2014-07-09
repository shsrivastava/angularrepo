angular.module('myApp.services')

			.factory('reviewProvider', ['$http', '$q', '$resource', 'parseSettings',

		function($http, $q, $resource, parseSettings) {
		var courseRef = $resource('https://api.parse.com/1/classes/courses/', null, {
				get: {
					method: 'GET',
					headers: parseSettings,
					isArray: true,
					transformResponse : function(data){
						var raw = angular.fromJson(data);

						return raw.results;
					}
				},
				create: {
					method : 'POST',
					isArray : false,
					headers: parseSettings
				}
			})
			var reviews=[{

				"id":"1",
				"username": "Shweta",
				"date":"22/08/2014",
				"rev": "The course is good",
				"rating":"3"
			}, {
				"id":"1",
				"username": "Prachi",
				"date":"15/01/2012",
				"rev": "The course is excelent",
				"rating":"3"
			}, {
				"id":"2",
				"username": "Abhy",
				"date":"08/12/2014",
				"rev": "The course is nice",
				"rating":"3"
			}];

			
			function getReviews()
	 {
		return reviews;
	}
			
			function addReview(myreview) {
			/*reviews.push(myreview);*/
			courseRef.create(myreview);
			}

			function getReview(course_id)
 			{
			return courseRef.get({
					course_id: course_id
		
			});	

			};

			

			function getavg(myreview) {

				var sum=0;
				var count=0;
				var avgRating=0.0;

				angular.forEach(myreview, function(item, index) {
						sum+=parseInt(item.rating);
						count++;
						})
				avgRating=sum/count;
				console.log(avgRating);
				return avgRating;
				
			};



			return {
				getReviews:getReviews,
				add: addReview,
				get:getReview,
				getavg:getavg
			};

		}
	]);


				/*var deferred = $q.defer();
				return courseRef.get({
				id: id
				$http.get('data/courses.json').success(function(data) {
					courses = data;
					/*deferred.resolve(targetReview);
					/*return deferred.promise;*/

			/*	var targetReview=[];

				var reviews=getReviews();
				

					angular.forEach(reviews, function(item, index) {
						if (item.id === id) {
							targetReview.push(item);

							
						}
					})
				

				
				return targetReview;*/