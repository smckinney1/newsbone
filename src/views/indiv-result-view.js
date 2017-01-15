define([
	'backbone'
], function(Backbone) {

	'use strict';

	var IndivResult = Backbone.View.extend({

		initialize: function () {
			this.render();

		},

		render: function () {
			this.$el.html(this.model.get('title'));
			//console.log(this.model);
		}

	});

	return IndivResult;

});