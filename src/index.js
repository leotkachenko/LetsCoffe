
const TelegramBot = require('node-telegram-bot-api')

const config = require('./config/env')
const log = require('./config/function-helpers-1.0.0')

log.logStart();

const bot = new TelegramBot(config.TOKEN, {
    polling: true
});

bot.on('message', msg => {

    console.log(msg.from.first_name, msg)
});