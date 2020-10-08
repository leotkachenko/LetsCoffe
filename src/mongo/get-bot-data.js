function getClientInfo(message) {
	return {
        chatId: message.hasOwnProperty('chat') ? message.chat.id : message.from.id,
		firstName: message.from.first_name,
        lastName: message.from.last_name,
        userName: message.from.username,
        languageCode: message.from.language_code,
        date: Date(message.date)
	};
}

function getLastMessageText(message) {
	return message.message.text;
}

module.exports = {
    getClientInfo,
    getLastMessageText
}