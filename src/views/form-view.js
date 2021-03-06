define([
	'backbone',
	'bootstrap',
	'models/form-model',
	'models/newsstory-model',
	'text!templates/form-template.html'
], function (Backbone, bootstrap, FormModel, NewsStoryModel, template) {
	'use strict';
	
	var FormView = Backbone.View.extend({

		el: '#api-query-form',

		model: new FormModel(),

		template: _.template(template),

		initialize: function () {
			this.render();
		},

		events: {
			'keyup #search-area input': function (e) {
				var topic = $(e.target).val();
				this.model.set({searchTopic: topic});

				//code below will change, this is to practice setting title of NewsStoryModel & add to collection
				if (e.which === 13) {
					this.collection.getStories(topic);			//building this function in the collection
				}
			},
			'change #from-date': function (e) {
				this.model.setDateFrom($(e.target).val());												//function exists within the model; business logic done in model
			},
			'change #to-date': function (e) {
				this.model.set({dateTo: $(e.target).val()});
			},
			'change #order-by': function (e) {
				this.model.set({orderBy: $(e.target).val()});
			}


		},

		render: function () {

			this.$el.append(this.template({}));

			this.listenTo(this.model, 'change:searchTopic', function () {								//UI needs to be updated from the model
				var searchValue = this.model.get('searchTopic');
				$('#search-area input').val(searchValue);
			});

			this.listenTo(this.model, 'change:dateFrom', function () {
				var dateFromValue = this.model.get('dateFrom');
				$('#from-date').val(dateFromValue);
			});

			this.listenTo(this.model, 'change:dateTo', function () {
				var dateToValue = this.model.get('dateTo');
				$('#to-date').val(dateToValue);
			});

			this.listenTo(this.model, 'change:orderBy', function () {
				var orderValue = this.model.get('orderBy');
				$('#order-by').val(orderValue);
			});

			return this;
		}

	});

	return FormView;

});



