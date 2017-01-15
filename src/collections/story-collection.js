define([
	'backbone',
	'models/newsstory-model'
], function (Backbone, NewsStoryModel) {
	var StoryCollection = Backbone.Collection.extend({

		model: NewsStoryModel,


		//place fetch in a custom function to avoid polluting the view
		getStories: function (topic) {
			//When a collection performs a fetch, it assigns the results to itself. Then, it takes each result and creates a new NewsStoryModel from those results as part of itself.
			this.fetch({
				url: 'https://content.guardianapis.com/search?page=1&q=' + topic + '&api-key=9f55a2ee-1376-4d7f-b1bf-dfed2da408c5&from-date=2017-01-01&to-date=2017-01-08&order-by=newest',
				success: function (collection, response, options) {
					console.log('Success: ', response);
				},
				error: function (collection, response, options) {
					console.log('Error: ', response);
				}
			});
		},

		//API call returns a list, so we need to parse the collection, then parse the NewsStoryModel (contains its own parse function).
		//This is run first because you have to get the list first before you can operate on the items on the list in the model
		parse: function (response) {
			return response.response.results;
		}

	});

	return StoryCollection;
});