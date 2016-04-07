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
			var self = this, posts = []

			self.data.forEach(function(post){
				var name = post.name.replace('.md', null),
					url = post.download_url

				name = name.split('_').forEach(function(word, i, array){
					array[i] = word.charAt(0).toUpperCase() + word.slice(1)
				}).join(' ')

				posts.push({
					name: name,
					url: url
				})
			})

			return posts
		},
		fetch: function(url){
			var self = this, raw

			if (typeof url && url.constructor == Number) {
				url = self.data[url].download_url
			} else if (typeof url && !(url.indexOf('http') > -1)) {
				throw new TypeError('First arg must be a valid http url or post index.')
			}
			console.log(url)
			$.get(url, function(data){
				console.log(data)
			})
		},
		parse: function(raw){
			return marked(raw)
		}
	}

	return PostController
})