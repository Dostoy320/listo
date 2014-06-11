var mongoose = require('mongoose');

module.exports = mongoose.model('List', {
	text: String,
	in_cart: Boolean
});