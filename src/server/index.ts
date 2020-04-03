import { Application, Request, Response } from 'express'
const express = require('express')
const path = require('path')
const fs = require('fs')
const http = require('http')
const consola = require('consola')
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const connectHistory = require('connect-history-api-fallback')
require('dotenv').config()

function start () {
  try {
    const PORT : number = parseInt(process.env.PORT) || 3000
    const HOST : string = process.env.HOST || 'localhost'
    
    const PATH_TO_CLIENT  = path.join(__dirname, '..', '..', './dist')
    const PATH_TO_HTML  = path.join(PATH_TO_CLIENT, 'index.html')

    fs.stat(PATH_TO_HTML, (err) => {
      if (err) throw consola.error({message: 'index.html is not defined', badge: true,})
    })

    const app : Application = express()
    const server = http.createServer(app)
    const io = socketIO.listen(server)

    app.use(connectHistory())
    app.use(express.static(PATH_TO_CLIENT))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.get('/', (req : Request, res : Response) => {
      res.sendFile(PATH_TO_HTML)
    })

    server.listen(PORT, HOST, () => {
      consola.ready({
        message: `Server is listening to http://${HOST}:${PORT}`,
        badge: true,
      })
    })

    io.on('connection', (socket) => {
      // MARKER Этот код выведется в терминал сервера
      consola.info({ message: 'Connection is ready' })
      socket.on('disconnect', (socket) => {
        consola.info({ message: 'Connection is finished' })
      })
    })

  } catch(err) {
    if (err) {
      consola.error({
        message: `ERROR: ${err}`,
        badge: true,
      })
    }
  }
}

start()