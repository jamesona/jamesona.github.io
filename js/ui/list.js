define('ui/List', ['ui/Element'], function(Element){
	"use strict"

	function List(type, items) {
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
		$(self.e).data('c', self)
		self.items = []

		if (typeof items == "object") {
			if (items.isArray())
				self.items = items
			else {
				items.forEach(function(k, v, i) {
					self.items[i] = v
				})
			}
		}

		return self
	}

	List.prototype = {
		constructor: List,
		propagate: function(){
			var self = this, items = self.items, list = $(self.e)

			list.empty()
			
			items.forEach(function(v, i){
				var item = $('<li>'+v+'</li>')
				list.append(item)
			})
			
			return self.e
		},
		addItem: function(value, index, prop){
			var self = this

			if (typeof index == 'number')
				self.items[index] = value
			else
				self.items.push(value)
			if (prop || (typeof index == 'bool' && index)) {
				self.propagate()
				return self.e
			}
			return self.items
		},
		removeItem: function(index, prop){
			var self = this
			self.items.splice(index, 1)
			if (prop) {
				self.propagate()
				return self.e
			}
			return self.items
		}
	}

	return List
})