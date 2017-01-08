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
		//collection: new StoryCollection(),
		template: _.template(template),

		initialize: function () {
			console.log('resultsView: ', this.collection);
			this.render();
		},

		render: function () {
			var self = this;
			self.$el.html(this.template({}));

			var fakeStory = new NewsStoryModel({
				id: 100,
				title: 'Kittens',
				url: 'http://www.youtube.com/',
				date: '2016-01-04'
			});

			this.collection.add(fakeStory);
			console.log('after adding the story in results view...', this.collection);


			var stories = new StoryCollection([fakeStory]);

			
			var indivResult = new IndivResult({
				model: fakeStory
			});

			stories.each(function(story) {

				var indivResult = new IndivResult({
					model: story
				});

				self.$el.append(indivResult.el);
				
			});

			return self;
		}
	});

	return ResultsView;

});