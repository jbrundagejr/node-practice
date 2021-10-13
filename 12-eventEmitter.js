const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// .on listens for an event
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id: ${id}`)
})

// can have multiple .ons for the same event
customEmitter.on('response', () => {
  console.log(`some other logic here `)
})

// .emit emits an event (the callback defined in .on)
// .emit has to come AFTER .on
customEmitter.emit('response', 'jon', 34)