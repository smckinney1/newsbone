define([
	'backbone'
], function (Backbone) {
	var FirstModel = Backbone.Model.extend({
		initialize: function () {
			console.log('model initialized');
		}

	});

	return FirstModel;
});