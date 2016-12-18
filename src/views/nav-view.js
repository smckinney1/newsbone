define([
	'jquery',	//may not need to require this for this view
	'underscore',
	'backbone',
	'text!templates/nav-template.html'
], function ($, _, Backbone, navTemplate) {
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

			this.$el.append(this.template({}));
			return this;
		}

	});

	return NavView;

});