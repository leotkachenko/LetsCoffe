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
        bot.sendPhoto(getChatId(query), __dirname + '/images/letscoffee.png',
            {
                caption: 'This bot will help your business communicate with customers.\n Maintain order statistics. Find the most attractive menu items and be available to your audience 24 hours a day.',
                ...messageOptions
            }
        );
    })
}

module.exports = {
    startBotHandler
}