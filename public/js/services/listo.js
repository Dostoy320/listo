var listoService = angular.module('listoService', []);

listoService.factory('ListServ', function($http) {
	return {
		get : function() {
			return $http.get('/api/list');
		},
		post : function(listoData) {
			return $http.post('/api/list', listoData);
		},
		update : function(listoData) {
			return $http.post('/api/list/update', listoData);
		},
		delete : function(id) {
			return $http.delete('api/list/' + id);
		}
	}
});