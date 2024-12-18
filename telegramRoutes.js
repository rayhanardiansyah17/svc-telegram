const express = require('express');
const { sendGroupMessage } = require('../services/telegramService');

const router = express.Router();

router.post('/send-message', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const result = await sendGroupMessage(message);
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
