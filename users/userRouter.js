const express = require('express');
// you also will need the post info
const post = require ('../posts/postDbgit ')
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

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
