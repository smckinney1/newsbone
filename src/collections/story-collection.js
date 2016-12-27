define([
	'backbone',
	'models/newsstory-model'
], function (Backbone, NewsStoryModel) {
	var StoryCollection = Backbone.Collection.extend({

		model: NewsStoryModel

	});

	return StoryCollection;
});

//srm: Understood how collection model works
//srm: now need to create new instances of model. Add a sample model to the collection somewhere.