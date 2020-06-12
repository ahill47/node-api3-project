const db= require('./users/userDb')
const dbPost=require('./posts/postDb')


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

function validatePostId(req, res, next){
    // const {id}=req.params
    // console.log(id)
    dbPost.getById(req.params.id)
        .then(post=>{
            console.log(req.params.id)
            if (post){
                 req.post=post;
                   next() 
                   console.log('req.post promise', req.post)
            } else{
               
               res.status(404).json({
                   message:"Post not found"
                   
               })
            
            }
        })
    .catch(error=>{
        res.status(500).json({
            message:"You have a error"
        })
        console.log('req.post', req.post)
    })
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

module.exports={
    validatePostId,
    validateUser,
    validatePost,
    validateUserId,
}
