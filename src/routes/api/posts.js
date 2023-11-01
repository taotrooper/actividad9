const router = require('express').Router();

const PostsController = require('../../controllers/posts.controller');

// Rutas /api/posts
router.get('/', PostsController.getAllPosts);
router.get('/autor', PostsController.getPostsByAutorId);
router.get('/:postId', PostsController.getPostById);
router.post('/', PostsController.createPost);

// Exports
module.exports = router;