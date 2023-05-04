const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefInformation = require('./data/chefInformation.json')

app.use(cors());

app.get('/',(req, res) => {
    res.send('Japanese Chef cuisine app is running.')
})

app.get('/chefInformation', (req, res) => {
    res.send(chefInformation)
})

app.listen(port, () => {
    console.log(`Japanese Chef cuisine app is running on port: ${port}`)
})