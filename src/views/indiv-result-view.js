define([
	'backbone',
	'text!templates/result-template.html'
], function(Backbone, template) {

	'use strict';

	var IndivResult = Backbone.View.extend({

		template: _.template(template),

		initialize: function () {
			this.render();

		},

		events: {
			'click .heart-favorite': function () {
				alert('clicked favorite: ' + this.model.get('title'));
			}
		},

		render: function () {

			//IndivResult view is passed the model through ResultsView
			this.$el.append(this.template({

				title: this.model.get('title'),
				url: this.model.get('url'),
				date: this.model.get('date')

			}));
			//console.log(this.model);
		}

	});

	return IndivResult;

});