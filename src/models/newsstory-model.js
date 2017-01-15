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
			var pubDate = (new Date(response.webPublicationDate)).toLocaleDateString();
			//still need to assign ID (random number)
			return {title: response.webTitle, url: response.webUrl, date: pubDate};
		}

	});

	return NewsStoryModel;
});