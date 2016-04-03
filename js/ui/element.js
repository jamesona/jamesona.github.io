define('ui/Element', function(){
	"use strict"

	function Element(type) {
		var self = this
		if (!(this instanceof Element)) {
			throw new Error('Element constructor cannot be called as a function')
			return false
		}
		self.e = $('<'+type+'></'+type+'>')
		return self.e
	}

	return Element
})