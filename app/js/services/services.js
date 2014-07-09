'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services').value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 100,
	maxResults : 20
})


.value('parseSettings', {
	'X-Parse-Application-Id' : 'QN0luELmzHObsMirUu9EFWDwEybj6clFSHDlWAEC',
	'X-Parse-REST-API-Key' : 'G9cYL8EJzz0UdFYkIKroBbuYls8zqA99ELLUFZck',
})



