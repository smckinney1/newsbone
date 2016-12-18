define([
	'backbone',
	'bootstrap',
	'models/form-model',
	'text!templates/form-template.html'
], function (Backbone, bootstrap, FormModel, formTemplate) {
	'use strict';
	
	var FormView = Backbone.View.extend({

		el: '#api-query-form',

		model: new FormModel(),

		template: _.template(formTemplate),

		initialize: function () {
			this.render();
		},

		events: {
			'keyup #search-area input': function (e) {
				this.model.set({searchTopic: $(e.target).val()});
			},
			'change #from-date': function (e) {
				var formattedDate = new Date($(e.target).val() + ' 00:00:00 EST');			//format date field input to JS Date so that we can add 7 days
				formattedDate.setDate(formattedDate.getDate() + 7);							//to be used in the "to" date default
				this.model.set({fromDate: $(e.target).val()});
				this.model.set({toDate: formattedDate.toJSON().slice(0,10)});				//format the "to" date back to correct format for API call
			},
			'change #to-date': function (e) {
				this.model.set({toDate: $(e.target).val()});
			}

		},

		render: function () {

			this.$el.append(this.template({}));
			this.listenTo(this.model, 'change', function () {
				var searchValue = this.model.get('searchTopic');
				var fromDateValue = this.model.get('fromDate');
				var toDateValue = this.model.get('toDate');
				$('#search-area input').val(searchValue);
				$('#from-date').val(fromDateValue);
				$('#to-date').val(toDateValue);
			});
			return this;
		}

	});

	return FormView;

});