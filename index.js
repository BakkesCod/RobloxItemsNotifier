const express = require('express')
const request = require('request');

const app = express()
const UpdateHook = ""


app.all('/', (req, res) => {
    if (req.method == "HEAD") {
        // Get Roblox Items Status
        res.send('head')
    } else {
        res.send('Yo!')
    }
})
app.listen(process.env.PORT || 3000)
