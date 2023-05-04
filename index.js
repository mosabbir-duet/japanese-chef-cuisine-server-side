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

app.get('/chefInformation/:id',(req, res) => {
    const id = req.params.id;
    console.log(id)
    const info = chefInformation.find(info => info.id == id)
    res.send(info)
    
})

app.listen(port, () => {
    console.log(`Japanese Chef cuisine app is running on port: ${port}`)
})