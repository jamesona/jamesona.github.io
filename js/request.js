define(function(){
	'use strict'

	Request = function(options) {
		var self = this

		for (var option in options) {
			if (options.hasOwnProperty(option)) {
				if (typeof options[option] == typeof this._options[option]) {
					this[option] = options[option]
				}
			}
		}

		return self
	}

	Request.prototype = {
		constructor: Request,
		_options: {
			beforeSend: Function,
			complete: Function,
			data: [Object, String, Array],
			error: Function,
			headers: Object,
			method: Function,
			password: String,
			success: Function,
			timeout: Number,
			username: String,
			url: String,
		}

	}

	return RequestController
})
