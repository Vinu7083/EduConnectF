const router= require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post

router.post("/",async (req,res)=>{
    const newPost=new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){ 
        res.status(309).json(err);
    }

})


//update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            return res.status(208).json("The post has been updated");
        } else {
            return res.status(403).json("you can update only your post");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            return res.status(200).json("The post has been deleted ");
        } else {
            return res.status(403).json("You can delete  only your post");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//like a post //dislike a post
router.put("/:id/like", async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push : {likes : req.body.userId}});
            res.status(200).json("the post has been liked ");
        } else{
            await post.updateOne({$pull :{likes:req.body.userId}});
            res.status(200).json("The post has been disliked ");
        }
    }
    catch(err){
        res.status(500).json(err);
    }   

})
//get a post
router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err)
    {
        res.status(400).json(err);
    }
})

//get timeline posts

router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//get users's all post
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({username:req.params.username })
        const posts=await Post.find({userId:user._id})
        res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  

module.exports=router;