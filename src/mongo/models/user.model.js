const mongoose = require('mongoose')

const Schema = mongoose.Schema

var UserSchema = new Schema({
	chatId: String,
	firstName: String,
	lastName: String,
	userName: String,
	languageCode: String,
	date: String 
});

var User = mongoose.model('user', UserSchema);

module.exports = User;