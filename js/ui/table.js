define('ui/Table', ['ui/Element'], function(Element){
	"use strict"

	function Table(data, useHeaders) {
		var self = this
		if (!(this instanceof List)) {
			throw new Error('List constructor cannot be called as a function')
			return false
		}

		self.e = new Element('table')
		self.head = $(self.e).append('<thead></thead>')
		self.body = $(self.e).append('<tbody></tbody>')
		self.headers = []
		self.rows = []

		if (data && typeof data != "object") {
			throw new TypeError('Table data must be an object or multi-dimensional array; received '+typeof(data))
			return false
		}

		if (data) {
			if (data.constructor === Object)
				data.forEach(function(k, v, i){
					self.headers.push(k)
					self.rows.push(v)
				})
			else {
				if (useHeaders) {
					self.headers = data[0]
					data.shift()
				}
				data.forEach(function(v, i) {
					self.rows[i] = v
				})
			}
		}

		return self
	}

	Table.prototype = {
		constructor: Table,
		draw: function(){
			var self = this
		},
		addRow: function(data, i){
			var self = this

			if (data.constructor === Object) {
				var input = data, data = []

			}

			if (i)
				self.rows.splice(i, 0, data)
			else
				self.rows.push(data)
		},
		removeRow: function(key){
			var self = this
		},
		addColumn: function(data, i){
			var self = this
		},
		removeColumn: function(key){
			var self = this
		},
	}
	
	return Table
})