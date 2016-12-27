define([
	'backbone',
	'collections/story-collection',
	'text!templates/results-template.html'
], function (Backbone, StoryCollection, template) {
	'use strict';

	var ResultsView = Backbone.View.extend({
		//el: {element},
		collection: new StoryCollection(),
		template: _.template(template),

		initialize: function () {
			this.render();
		},

		render: function () {
			//render stuff
			console.log('results were a great success');
		}
	});

	return ResultsView;

});