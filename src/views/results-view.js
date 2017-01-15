define([
	'backbone',
	'collections/story-collection',
	'text!templates/results-template.html',
	'models/newsstory-model',
	'views/indiv-result-view'
], function (Backbone, StoryCollection, template, NewsStoryModel, IndivResult) {
	'use strict';

	var ResultsView = Backbone.View.extend({
		el: '#blah',
		template: _.template(template),


		initialize: function () {
			//whenever there's a story added to the collection, display the story
			this.listenTo(this.collection, 'add', this.displayStory);
			this.render();
		},

		render: function () {
			var self = this;
			self.$el.html(this.template({}));

			return self;
		},


		//model, collection are passed in by the nature of the listenTo function above. We only need the model.
		displayStory: function (story) {

			var indivResult = new IndivResult({
				model: story
			});

			this.$el.append(indivResult.el);
		}

	});

	return ResultsView;

});