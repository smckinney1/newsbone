//srm: moving story collection up

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
		collection: new StoryCollection(),
		template: _.template(template),

		initialize: function () {

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

			var fakeStory2 = new NewsStoryModel({
				id: 101,
				title: 'Puppies',
				url: 'http://www.netflix.com',
				date: '2016-01-03'
			});

			var fakeStory3 = new NewsStoryModel({
				id: 102,
				title: 'Other Cuteness',
				url: 'http://www.hulu.com',
				date: '2016-01-02'
			});


			var stories = new StoryCollection([fakeStory, fakeStory2, fakeStory3]);

			
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