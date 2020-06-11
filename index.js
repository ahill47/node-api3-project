// code away!
const server= require('./server')
const express =require ('express')


const port=4000

server.listen(port, () => {
    console.log( `\n*** Server Running on http://localhost:${port} ***\n` ); 
  });