define([
	'backbone'
], function (Backbone) {
	var FormModel = Backbone.Model.extend({

		defaults: {
			searchTopic: '',
			dateFrom: '',
			dateTo: '',
			orderBy: 'relevance'
		},

		initialize: function () {
			console.log('form model initialized');
		},

	});

	return FormModel;
});