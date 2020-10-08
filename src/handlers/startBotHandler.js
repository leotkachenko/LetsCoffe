const { getClientInfo } = require('../mongo/get-bot-data');
const { saveUser } = require('../mongo/services/userService');
const { sendStarterButtons } = require('../buttons/keyboard-buttons');
const { buildMessageOptions } = require('../buttons/buttonsUtils')
const { getChatId } = require('../config/function-helpers-1.0.0')
require('../mongo/mongodb-connection')

var clientStarterMessage = new RegExp('\/start');

const startBotHandler = (bot) => {

    bot.onText(clientStarterMessage, (query, _) => {

        let messageOptions = buildMessageOptions(sendStarterButtons);
        console.log(messageOptions.reply_markup)
        let clientInfo = getClientInfo(query);
        console.log(getChatId(query))


        saveUser(clientInfo, (saveErr, _) => {
            if (saveErr) {
                bot.sendMessage(clientInfo.telegramId, 'Some error! Sorry', messageOptions);
                return;
            }

        })
        bot.sendMessage(getChatId(query), 'Hi everyone', messageOptions)
    });
}

module.exports = {
    startBotHandler
}