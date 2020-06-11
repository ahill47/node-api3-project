const express = require('express');
const db = require ('./postDb')

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
    next()
  
  })
  next()
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
