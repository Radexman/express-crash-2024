import express from 'express';
import { getPost, getPosts, createPost, updatePost, deletePost } from '../controllers/postsController.js';

const router = express.Router();

// Get all posts
router.get('/', getPosts);

// Get single post
router.get('/:id', getPost);

// Create single post
router.post('/', createPost);

// Change current post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

export default router;
