var listoService = angular.module('listoService', []);

listoService.factory('ListServ', function($http) {
	return {
		get : function() {
			return $http.get('/api/list');
		},
		create : function(listoData) {
			return $http.post('/api/list', listoData);
		},
		delete : function(id) {
			return $http.delete('api/list/' + id);
		}
	}
});