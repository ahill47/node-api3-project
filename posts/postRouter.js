const express = require('express');
const db = require ('./postDb')
const mids=require('../middleware')
const router = express.Router();
router.use(express.json())

router.get('/', (req, res, next) => {
  db.get()
    .then(posts=>{
      console.log(posts);
      res.status(200).json({message: 'It worked'})
    })
  .catch(error=>{
    console.log('You have an error');
  
  })

});

router.get('/:id', mids.validatePostId, (req, res) => {

  db.getById(req.params.id)
  .then(posts=>{
    
    res.status(200).json(posts)
  })
  .catch(error=>{
    console.log(error)
  })
  // do your magic!
});

router.delete('/:id', mids.validatePostId, (req, res) => {
  // do your magic!
  db.remove(req.params.id)
  .then(removed=>{
    res.status(200).json(removed)
  })
  .catch(error=>{
    console.log(error)
  })
});

router.put('/:id', validatePostId, mids.validatePost ,(req, res) => {
  // do your magic!
  const {text}= req.body;
  const newText= {text};
  db.update(req.params.id, newText)
  .then(edit =>{
    res.status(200).json(edit)
  })
  .catch(error =>{
    console.log(error)
  })
});

// custom middleware

function validatePostId(req, res, next){
  const {id}=req.params
  db.getById(id)
      .then(posts=>{
          if (!post){
              res.status(404).json({
                  message:"invalid post id"
              })
          } else{
              req.post=post;
              next()
          }
      })
}

module.exports = router;
