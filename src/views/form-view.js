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
				this.model.setDateFrom($(e.target).val());												//function exists within the model
			},
			'change #to-date': function (e) {
				this.model.set({dateTo: $(e.target).val()});
			}

		},

		render: function () {

			this.$el.append(this.template({}));
			this.listenTo(this.model, 'change', function () {											//UI needs to be updated with the model

				var searchValue = this.model.get('searchTopic');
				var dateFromValue = this.model.get('dateFrom');
				var dateToValue = this.model.get('dateTo');
				$('#search-area input').val(searchValue);
				$('#from-date').val(dateFromValue);
				$('#to-date').val(dateToValue);
			});
			return this;
		}

	});

	return FormView;

});