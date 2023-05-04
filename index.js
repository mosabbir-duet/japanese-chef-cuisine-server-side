const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const chefInformation = require('./data/chefInformation.json')

app.get('/',(req, res) => {
    res.send('Japanese Chef cuisine app is running.')
})

app.get('/chef-information', (req, res) => {
    res.send(chefInformation)
})

app.listen(port, () => {
    console.log(`Japanese Chef cuisine app is running on port: ${port}`)
})