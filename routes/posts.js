import express from 'express';

import { getPosts, createPost, updatePost, deletePost, isLiked } from '../controllers/posts.js'
import middlewareAuth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', middlewareAuth, createPost);
router.patch('/:id', middlewareAuth, updatePost);
router.delete('/:id', middlewareAuth, deletePost);
router.patch('/:id/bookmark', middlewareAuth, isLiked);

export default router;