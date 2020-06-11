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

});//works

router.get('/:id', mids.validatePostId, (req, res) => {

  db.getById(req.params.id)
  .then(posts=>{
    
    res.status(200).json({message:"It worked"})
    
  
  })
  .catch(error=>{
    console.log(error)
  })
  // works
});

router.delete('/:id',mids.validatePostId,  (req, res) => {
  // do your magic!
  db.remove(req.params.id)
  .then(removed=>{ 
    res.status(200).json({message:"Post has been deleted"})
    
  })
  .catch(error=>{
    console.log(error)
  })
});// works

router.put('/:id', validatePostId, mids.validatePost ,(req, res) => {
  // do your magic!
  const {text}= req.body;
  const newText= {text};
  db.update(req.params.id, newText)
  .then(edit =>{
    res.status(200).json({message:"hey I also work"})
  })
  .catch(error =>{
    console.log(error)
  })
}); // i dont work needs help

// custom middleware

function validatePostId(req, res, next){
  const {id}=req.params
  db.getById(id)
      .then(post=>{
          if (!post){
              res.status(404).json({
                  message:"invalid post id"
              })
          } else{
              req.post=post;
             res.status(404).json({
                 message:"Post not found"
             })
          }
      })
  .catch(next)
}


module.exports = router;
