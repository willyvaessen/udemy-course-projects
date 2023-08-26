const Post = require("../models/post");

exports.getPosts = (req, res) => {
    res.json({
        posts: [{title: "First post"},{title: "Second post"}]
    });
};

//  PAUSING NOW, due to an error: throw new MongooseError('Model.prototype.save() no longer accepts a callback');

// exports.createPost = (req, res) => {
//     const post = new Post(req.body)
//     post.save().then(r =>);
// }