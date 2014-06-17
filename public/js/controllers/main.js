(function(){
	var listApp = angular.module('listoController', []);

	// listApp.factory('List', function(){
	// 	return {};
	// });

	listApp.controller('ListController', function($http, $scope, ListServ){

		ListServ.get().success(function(data){
			$scope.list = data;
		});

		var pad = this;

		pad.entry = "";

		this.addNew = function() {

			var new_entry = {name: $scope.entry};

			$http.post('/api/list', new_entry).success(function(data){
				$scope.entry = "";
				$scope.list = data;
			});
		}
	});
})();