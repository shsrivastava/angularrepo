angular.module('myApp.services')
	/*.factory('courseProvider', ['$http', '$q','parseSettings','$resource',

		function($http, $q,$resource,parseSettings) {

			var courseRef = $resource('https://api.parse.com/1/classes/mycourses/:objectId', null, {*/
				.factory('courseProvider', ['$http', '$q', '$resource', 'parseSettings',

		function($http, $q, $resource, parseSettings) {
		var courseRef = $resource('https://api.parse.com/1/classes/shcourses/:objectId', null, {
				get : {
					method: 'GET',
					headers: parseSettings,
					isArray: true,
					transformResponse : function(data){
						var raw = angular.fromJson(data);
						console.log(raw);
						return raw.results;
					}
				},
				create: {
					method : 'POST',
					isArray : false,
					headers: parseSettings
				},
				update: {
					method: 'PUT',
					isArray: false,
					headers: parseSettings
				}
			})


			function getCourses() {
				return courseRef.get();
			}

			function addCourse(course) {
				courseRef.create(course);
			}


			

			function getCourse(id) {

			return courseRef.get(
					{
					where: {'objectId':id}
					
					}
				);
			}

			function updateavg(avg,id){
				return courseRef.update({ objectId:id },{
				    avg_rating:avg
					//'courseID': courseID
				});
			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse,
				updateavg:updateavg
			};

		}
	]);