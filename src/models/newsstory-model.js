define([
	'backbone'
], function (Backbone) {
	var NewsStoryModel = Backbone.Model.extend({

		defaults: {
			id: '',
			title: '',
			url: '', 
			date: ''
		},

		//parse the model so that we can assign the correct data from the API call to the model default attributes
		parse: function (response) {
			
			//still need to assign ID (random number) + date (formatted)
			return {title: response.webTitle, url: response.webUrl};
		}

	});

	return NewsStoryModel;
});