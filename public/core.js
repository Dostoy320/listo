(function(){
	var listApp = angular.module('listo', []);

	// Sample list for testing
	var sampleList = [
	{
		name: 'some tasty bread',
	},
	{
		name: 'some smelly cheese'
	}];

	listApp.controller('ListController', function(){
		this.list = sampleList;
	});

	listApp.controller('EntryController', function(){
		this.entry = "";

		this.addNew = function(item) {
			item.push({name: this.entry});
			this.entry = "";
		}
	});
})();