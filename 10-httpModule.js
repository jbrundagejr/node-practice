const http = require('http')

const server = http.createServer((request, response) => {
  if(request.url === '/'){
    response.end('Welcome to our home page')
  }
  else if(request.url === '/about'){
    response.end('Here is our about page')
  }
  else response.end(
    `<h1>Oops! Page doesn't exist.</h1>
    <a href='/'>Back Home</a>
    `)
})

server.listen(2000)