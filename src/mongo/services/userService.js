var userModel = require('../models/user.model');

function getAll(callback) {
	userModel.find({}, (err, users) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, users);
		}
	})
}

function isNew(chatId, callback) {
	userModel.findOne({ chatId: chatId }, (err, existingUser) => {
		if (err) {
			callback(err, null);
			return;
		}
		if (existingUser) {
			callback(null, false);
		} else {
			callback(null, true);
		}
	});
}

function saveUser(userInfo, callback) {
	isNew(userInfo.chatId, (err, result) => {
		if (err) {
			callback(err, null);
			return;
		}
		if (result) {
			var newUserDto = new userModel(userInfo);

			newUserDto.save((err) => {
				if (err) {
					callback(err, null);
				} else {
					callback(null, true);
				}
			});
		} else {
			callback(null, false);
		}
	})
}

module.exports = {
	getAll,
	isNew,
	saveUser
};