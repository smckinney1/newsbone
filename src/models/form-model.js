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

		setDateFrom: function (date) {
			this.set({dateFrom: date});

			if (!this.get('dateTo')) {
				var dateTo = new Date(this.get('dateFrom') + ' 00:00:00 EST');				//format date field input to JS Date so that we can add 7 days
				dateTo.setDate(dateTo.getDate() + 7);										//to be used in the "to" date default
				this.set({dateTo: dateTo.toJSON().slice(0,10)});											//format the "to" date back to correct format for API call
			}
		}

	});

	return FormModel;
});