require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

// In-memory storage
const URLs = [];
const URLLabels = [];
let tempSiteURL = '';

// Listener (handler) for telegram's /bookmark event
bot.onText(/\/website/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = match.input.split(' ')[1];
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message


    bot.sendMessage(
        chatId,
        'Top Kek Official Website: https://topkektoken.org',
    );
});

// Listener (handler) for telegram's /bookmark event
bot.onText(/\/litepaper/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = match.input.split(' ')[1];
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message


    bot.sendMessage(
        chatId,
        'Link to Litepaper: https://topkektoken.org/assets/docs/TopKekLitePaperV1.pdf',
    );
});


// Listener (handler) for telegram's /start event
// This event happened when you start the conversation with both by the very first time
// Provide the list of available commands
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.chat.username;
    bot.sendMessage(
        chatId,
        `
            Welcome at <b>Top Kek</b> ${userId}
        `, {
        parse_mode: 'HTML',
    }
    );
});