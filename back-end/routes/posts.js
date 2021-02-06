import express from 'express';
import {getPosts, postPosts} from '../controllers/posts.js'
const router = express.Router();

router.get('/', getPosts);
router.post('/', postPosts);


export default router;