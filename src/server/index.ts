const express = require('express')
const path = require('path')
const http = require('http')
const consola = require('consola')
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const connectHistory = require('connect-history-api-fallback')
require('dotenv').config()

function start () {
  try {
    const PORT = process.env.PORT
    const HOST = process.env.HOST
    
    const PATH_TO_CLIENT  = path.join(__dirname, '..', '..', './dist')
    const PATH_TO_HTML  = path.join(PATH_TO_CLIENT, 'index.html')
    
    const app = express()
    const server = http.createServer(app)
    socketIO.listen(server)
    
    const static = express.static(PATH_TO_CLIENT)
    app.use(connectHistory())
    app.use(static)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.get('/', (req, res) => {
      res.sendFile(PATH_TO_HTML)
    })
    
    app.listen(PORT, HOST, () => {
      consola.ready({
        message: `Server is listening to http://${HOST}:${PORT}`,
        badge: true,
      })
    })
  } catch(err) {
    consola.error({
      message: `Server isn't listening. ERROR: ${err}`,
      badge: true,
    })
  }
}

start()