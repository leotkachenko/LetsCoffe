const TelegramBot = require('node-telegram-bot-api');

const config = require('./config/env');
const log = require('./config/function-helpers-1.0.0');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise
log.logStart();

require('./model/user.model')
require('./mongodb-connection')
const User = mongoose.model('user')

const bot = new TelegramBot(config.TOKEN, {
  polling: true,
});

bot.on('message', (msg) => {
  let user;

  user = new User(msg);
  user.save(function(err,result){ 
    if (err){ 
        console.log(err); 
        console.log('Here')
    } 
    else{ 
        console.log(result) 
        console.log('There')
    } 
}) 
});
