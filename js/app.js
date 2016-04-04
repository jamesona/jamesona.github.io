(function(){
	require.config({
		baseUrl: 'js/',
		paths: {
			'jquery': 'jquery-2.2.1.min',
			'views': './views',
			'ui': './ui'
		}
	})

	Object.defineProperty(Object.prototype, 'forEach', { 
		value: function() {
			var self = this
			Object.keys(self).forEach(function(key, i){
				if (typeof cb == 'function') cb(key, self[key], i)
			})
		},
		enumerable : false
	})
	Object.defineProperty(Object.prototype, 'isObject', { 
		value: function() {
			return this.constructor === Object
		},
		enumerable : false
	})
	Object.defineProperty(Object.prototype, 'isArray', { 
		value: function() {
			return this.constructor === Array
		},
		enumerable : false
	})

	require(['jquery', 'app'], function($, app){
		require(['views/index'], function(view) {
			
		})
	})
})()
