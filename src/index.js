const TelegramBot = require('node-telegram-bot-api');

const config = require('./config/env');
const { logStart } = require('./config/function-helpers-1.0.0');
const { startBotHandler } = require('./handlers/startBotHandler')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise

logStart();

const bot = new TelegramBot(config.TOKEN, {
	polling: true,
});
bot.on("polling_error", (m) => console.log(m));

startBotHandler(bot)

