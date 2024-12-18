const { sendTelegramMessage } = require('../helpers/telegramHelper');

const sendGroupMessage = async (message) => {
  try {
    const result = await sendTelegramMessage(message);
    return result;
  } catch (error) {
    throw new Error('Failed to send message to Telegram group');
  }
};

module.exports = {
  sendGroupMessage
};
