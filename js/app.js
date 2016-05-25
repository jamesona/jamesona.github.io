(function(){
	require.config({
		baseUrl: 'js/',
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

	require(['app', 'request'], function(app, request){
		require(['post'], function(PostController){
			post = new PostController()
			console.log(post)
		})
	})
})()
