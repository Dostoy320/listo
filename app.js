(function(){
	var app = angular.module('listo', []);

	// Sample list for testing
	var sampleList = [
	{
		name: 'some tasty bread',
	},
	{
		name: 'some smelly cheese'
	}];

	app.controller('ListController', function(){
		this.list = sampleList;
	});

	app.controller('EntryController', function(){
		this.entry = "";

		this.addNew = function(item) {
			item.push({name: this.entry});
			this.entry = "";
		}
	});
})();