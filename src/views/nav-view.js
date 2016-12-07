define([
	'jquery',
	'underscore',
	'backbone',
	'models/first-model',
	'text!templates/nav-template.html'
], function ($, _, Backbone, FirstModel, firstTemplate, navTemplate) {
	'use strict';
	
	var NavView = Backbone.View.extend({

		el: 'nav',

		template: _.template(navTemplate),

		initialize: function () {
			this.render();
		},

/*		events: {
			//'click element': 'do something'
		}*/

		render: function () {
			//console.log('rendering');
			//console.log('this.template: ', this.template);
			//this.$el.append(this.template({}));
			return this;
		}

	});

	return NavView;

});