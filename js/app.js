(function(){
	require.config({
		baseUrl: 'js/',
		paths: {
			'jquery': 'jquery-2.2.1.min',
			'pouch': 'pouchdb-5.3.0.min',
		}
	})

	app = require(['jquery', 'pouch', 'app'], function($, db, app){
		console.log(app)
	})
})()
