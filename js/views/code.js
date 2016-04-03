define(function(){
	"use strict"
	document.title = "You loaded the code view!"
	$(document.body).empty()
	require(['ui/List'], function(List){
		var linkList = new List('ul')
		$(document.body).append(linkList.e)
		$.get('https://api.github.com/users/jamesona/repos', function(response){
			response.forEach(function(v, i, a) {
				var link = '<a href='+v.html_url+'>'+v.name+'</a>'
				linkList.addItem(link, i, true)
			})
		})
	})
})