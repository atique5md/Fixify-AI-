const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())

// Add this line to parse incoming JSON requests
app.use(express.json());

app.get('/' ,  (req, res) => {
    res.send('hello world')
})

app.use('/ai', aiRoutes);

module.exports = app