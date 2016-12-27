define([
	'backbone'
], function (Backbone) {
	var NewsStoryModel = Backbone.Model.extend({

		defaults: {
			id: '',
			title: '',
			url: '', 
			date: ''
		}

	});

	return NewsStoryModel;
});