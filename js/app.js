(function(){
	require.config({
		baseUrl: 'js/',
		paths: {
			'jquery': 'jquery-2.2.1.min',
			'views': './views',
			'ui': './ui'
		}
	})

	require(['jquery', 'app'], function($, db){
		require(['views/index'], function(a){
			console.log(a.getHello())
		})
	})
})()
