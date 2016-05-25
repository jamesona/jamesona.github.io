define(['config', 'marked'], function(config, marked){
	'use strict'

	function PostController(){
		var self = this

		self.url = 'https://api.github.com/repos/'+config.github.user+'/'+
			config.github.repo+'/contents/'+config.github.postDir

		$.get(self.url, function(data) {
			self.data = data
		})
	}

	PostController.prototype = {
		constructor: PostController,
		list: function(){

		},
		fetch: function(url, cb){

		},
		update: function(cb){

		},
		parse: function(raw){
			return marked(raw)
		}
	}

	return PostController
})
