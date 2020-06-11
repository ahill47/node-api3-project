const express = require('express');
// you also will need the post info
const post = require ('../posts/postDb')
const db= require('./userDb')

const router = express.Router();
router.use(express.json())

router.post('/', (req, res) => {
  db.get()
    .then(user=>{
      console.log(user)
      res.status(200).json({
        message: 'It worked'
      })
      .catch(error=>{
        console.log("You have an error")
      })
    })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});


//*********************************/
//custom middleware

function validateUserId(){
  return (req, res, next)=>{
      db.getById(req.params.id)
          .then((user)=>{
              if(user){
                  req.user.user
                  next()
              }else{
                  res.status(404).json({
          message: "User not found",
        })
              }
          })
          .catch(next)
  }
}

function validateUser(req, res, next){
  if (!req.body){
      res.status(400).json({ message: "missing user data" })
  }else if (!req.body.name){
      res.status(400).json({ message: "missing required name field" })
  } else{
      next()
  }

}

function validatePost(req, res, next){
  if(!req.body){
      res.status(400).json({ message: "missing post data" })
  }else if (!req.body.text){
      res.status(400).json({message: "missing required text field"})
  }else{
      next()
  }
}
module.exports = router;
