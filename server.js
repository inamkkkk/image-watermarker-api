const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const watermarkRoutes = require('./routes/watermarkRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

app.use('/api', watermarkRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});