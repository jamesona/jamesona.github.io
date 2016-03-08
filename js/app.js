(function(){
	require.config({
		baseUrl: 'js/',
		paths: {
			'jquery': 'jquery-2.2.1.min.js',
			'pouch': 'pouchdb-5.3.0.min.js',
			'app': 'app.js'
		}
	})

	require(['jquery', 'pouch', 'app'], function($, db, app){

	})
})()
