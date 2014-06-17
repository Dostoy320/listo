(function(){
	var listApp = angular.module('listoController', []);

	listApp.controller('ListController', function($http, $scope, ListServ){

		ListServ.get().success(function(data){
			$scope.list = data;
		});

		this.addNew = function() {

			var new_entry = {name: $scope.entry};

			ListServ.post(new_entry).success(function(data){
				$scope.entry = "";
				$scope.list = data;
			});
		}
	});
})();