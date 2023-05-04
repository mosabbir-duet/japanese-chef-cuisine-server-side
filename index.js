const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/',(req, res) => {
    res.send('Japanese Chef cuisine app is running.')
})

app.listen(port, () => {
    console.log(`Japanese Chef cuisine app is running on port: ${port}`)
})