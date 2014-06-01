(function(){
	var app = angular.module('listo', []);

	// Sample list for testing
	var list = [
	{
		name: 'some tasty bread',
	},
	{
		name: 'some smelly cheese'
	}];

	app.controller('ListController', function(){
		this.data = list;
	});
})();