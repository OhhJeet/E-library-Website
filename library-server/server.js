const router = require('./router')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectdb = require('./connect')

const app = express();
app.use(express.json());
app.use(cors());
connectdb()
app.use('/api',router)
app.use(bodyParser.json());

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
