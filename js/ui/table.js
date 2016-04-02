define(function(){
	"use strict"
	var Element = require('ui/element')
	function Table(data, useHeaders) {
		var self = this
		if (!(this instanceof List)) {
			throw new Error('List constructor cannot be called as a function')
			return false
		}

		self.e = new Element('table')
		self.data = {}

		if (data && typeof data != "object") {
			throw new TypeError('Table data must be an object or multi-dimensional array; received '+typeof(data))
			return false
		}

		if (data) {
			if (data.constructor === Object)
				if (data.headers) {
					self.headers = data.headers
					delete data.headers
				}
				if (data.rows) {
					self.rows = data.rows
					delete data.rows
				}
				Object.keys(data).forEach(function(k, i){
					self.rows[i] = data[k]
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
	}
})