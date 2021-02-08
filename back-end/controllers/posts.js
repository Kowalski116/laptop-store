import PostMessage from '../models/postMessage.js'

export const getPosts = async (req,res) => {
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch(e){
        res.status(404).json({message: e.message});
    }
}

export const postPosts = async (req,res) => {
    res.send('THIS WORK!');

    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch (errror) {
        res.status(409).json({ message: errror.message})
    }
} 