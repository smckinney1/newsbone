'use strict';

require.config({

	baseURL: '/',

	shim: {
		'backbone': {
			deps: ['underscore', 'jquery']
			//exports: 'Backbone'
		},
		'bootstrap': {
			deps: ['jquery']
			//exports: 'Bootstrap'
		}
	},

	paths: {
		jquery: [
			'//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
			'/scripts/jquery/dist/jquery.min'
		],
		underscore: [
			'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore',
			'/scripts/underscore/underscore-min'
		],
		backbone: [
			'//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone',
			'/scripts/backbone/backbone-min'
		],
		bootstrap: [
			'//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
			'/scripts/bootstrap/dist/js/bootstrap'
		],
		text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
	}

});

require([
	'views/nav-view',
	'views/form-view',
	'views/results-view',
	'backbone'
], function (NavView, FormView, ResultsView, Backbone) {
	new NavView();	
	new FormView();
	new ResultsView();
});