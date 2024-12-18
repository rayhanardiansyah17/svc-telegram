const express = require('express');
const telegramRoutes = require('./routes/telegramRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/telegram', telegramRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
