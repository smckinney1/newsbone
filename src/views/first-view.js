define([
	'underscore',
	'jquery',
	'backbone',
	'models/first-model',
	'text!templates/first-template.html'
], function (_, $, Backbone, FirstModel, firstTemplate) {
	'use strict';
	
	var FirstView = Backbone.View.extend({

		el: '#hello-test',
		model: new FirstModel({'title': 'my title'}),

		/*template: _.template($('#view-template').html()),*/	//how it looked before using RequireJS

		template: _.template(firstTemplate),

		initialize: function () {
			this.render();
		},

		render: function () {
			//this.$el.text(this.model.attributes.title);
			/*this.$el.html(this.template(this.model.attributes));*/
			//this.$el.html(this.model.attributes);
/*			this.$el.html(this.template({
				title: this.model.attributes.title		>>>>don't need this because this.model.attributes is already a object, see below
			}));*/

			this.$el.html(this.template(this.model.attributes));

			return this;
		}

	});

	return FirstView;

	/*var firstView = new FirstView();*/  //this will be done in main.js using RequireJS
	
});