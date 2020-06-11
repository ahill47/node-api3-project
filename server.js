const express = require('express');

const userRouter=require('./posts/postRouter')
const postRouter = require('./users/userRouter')

const server = express();
const port=4000

server.use(logger)
server.use(express.json())




server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const time= new Date().toISOString()
  console.log(` Time:${time} Method: ${req.method} URL Request to: ${req.url}`)
  next()
}

module.exports = server;
