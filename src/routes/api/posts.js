const router = require('express').Router();

const PostsController = require('../../controllers/posts.controller');
const PostsMiddleware = require('../../middlewares/posts.middleware');

// Rutas /api/posts
router.get('/', PostsController.getAllPosts);
router.get('/autor', PostsMiddleware.checkAutorId, PostsController.getPostsByAutorId);
router.get('/:postId', PostsMiddleware.checkPostId, PostsController.getPostById);
router.post('/', PostsController.createPost);

// Exports
module.exports = router;