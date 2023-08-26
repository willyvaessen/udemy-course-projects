const express = require('express');
const postController = require('../controllers/post');
// const {response} = require("express");
const router = express.Router();

router.get('/', postController.getPosts);
router.post('/post', postController.createPost);


module.exports = router;

// }

// const getPosts = (req, res) => {
//     res.send("Posting !")
// }
//
// module.exports = {
//     getPosts
// };
