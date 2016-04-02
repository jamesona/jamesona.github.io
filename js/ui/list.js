define(function(){
	"use strict"
	var Element = require('ui/element')
	function List(type, options) {
		var self = this
		if (!(this instanceof List)) {
			throw new Error('List constructor cannot be called as a function')
			return false
		}
		if (!type || (type != 'ol' && type != 'ul')) {
			throw new Error('List constructor requires a valid type parameter ("ol" or "ul"); received'+typeof(type))
			return false
		}
		
		self.type = type
		self.e = new Element(self.type)

		if (typeof options == "object") {
			if (options.constructor === Object)
				self.options = options
			else {
				self.options = {}
				options.forEach(function(v,i) {
					self.options[i] = v
				})
			}
		}

		return self
	}

	List.prototype = {
		constructor: List,
		propagate: function(){
			var self = this, options = self.options, list = $(self.e)

			list.empty()
			for (var option in self.options) {
				var item = $('<li>'+options[option]+'</li>')
				list.append(item)
			}
			return self.e
		},
		addItem: function(key, value, prop){
			var self = this
			if (!value) value = key
			self.options[key] = value
			if (prop) {
				self.propagate()
				return self.e
			}
			return self.options
		},
		removeItem: function(key, prop){
			var self = this
			delete self.options[key]
			if (prop) {
				self.propagate()
				return self.e
			}
			return self.options
		}
	}
})