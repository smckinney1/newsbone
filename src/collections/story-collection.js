define([
	'backbone',
	'models/newsstory-model'
], function (Backbone, NewsStoryModel) {
	var StoryCollection = Backbone.Collection.extend({

		model: NewsStoryModel,


		//place fetch in a custom function to avoid polluting thev iew
		getStories: function (topic) {
			this.fetch({
				url: 'https://content.guardianapis.com/search?page=1&q=' + topic + '&api-key=9f55a2ee-1376-4d7f-b1bf-dfed2da408c5&from-date=2017-01-01&to-date=2017-01-08&order-by=newest',
				success: function (collection, response, options) {
					debugger;
					console.log('Success: ', response);
				},
				error: function (collection, response, options) {
					console.log('Error: ', response);
				}
			});
		},

		//API call returns a list, so we need to parse the collection, then parse the NewsStoryModel (contains its own parse function)
		parse: function (response) {
			debugger;
			return response.response.results;
		}

	});

	return StoryCollection;
});