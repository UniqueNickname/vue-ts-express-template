const consola = require('consola')

function socketAction (io) {
  io.on('connection', (socket) => {
    consola.info({ message: '[Connect]' })
  
    socket.on('newMessage', data => {
      consola.info({
        message: data.text,
        badge: true
      })
    })
  
    socket.emit('User', { name: 'Ivan' })
  
    socket.on('disconnect', (socket) => {
      consola.info({ message: '[Disconnect]' })
    })
  })
}

module.exports = socketAction