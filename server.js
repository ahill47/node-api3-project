const express = require('express');

const userRouter=require('./posts/postRouter')
const postRouter = require('./users/userRouter')

const server = express();
const port=4000


server.use(express.json())

server.use((req,res, next)=>{
  const time= new Date().toISOString()
  console.log(`${time}  ${req.method} ${req.url}`)
  next()
})



server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
