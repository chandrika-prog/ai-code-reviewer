const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'AI Code Reviewer backend is running!' });
});

app.post('/api/review', (req, res) => {
  const { code } = req.body;
  console.log('Received code:', code);
  res.json({ message: 'Review received. AI coming in Week 3!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});