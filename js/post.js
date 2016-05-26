define(['config', 'marked'], function(config, marked){
	'use strict'

	function PostController(){
		var self = this
		self.gistURL = 'https://api.github.com/users/'+config.github.user+'/gists'
	}

	PostController.prototype = {
		constructor: PostController,
		list: function(){
			var self = this

		},
		fetch: function(app, cb){
			var self = this,
				xhr = new XMLHttpRequest()

			xhr.onreadystatechange = function () {
				if (xhr.readyState === xhr.DONE) {
					if (xhr.status === 200) {
						app.posts = JSON.parse(xhr.responseText).filter((obj)=>{
							if (obj.description == 'Blog Posts')
								return true
							return false
						})[0].files
						if (typeof cb == 'function') cb()
					}
				}
			}

			xhr.open('GET', self.gistURL)
			xhr.send(null)
		},
		update: function(cb){
			var self = this

		},
		submit: function(cb){
			var self = this

		},
		parse: function(raw){
			return marked(raw)
		}
	}

	return PostController
})
