const axios = require('axios');
require('dotenv').config();
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const sendTelegramMessage = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  
  try {
    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw new Error('Failed to send Telegram message');
  }
};

module.exports = {
  sendTelegramMessage
};
