const express = require('express');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter')

const server = express();
const port=3000

server.use(logger)
server.use(express.json())
server.use('/users', userRouter)
server.use('/posts', postRouter)


// server.use((err, req,res,next)=>{
//   console.log(err)
//   res.status(500).json({
//     message:"Something is wrong"
//   })
// })


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
