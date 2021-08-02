const express = require('express');
const router = express.Router();
const posts = require('../model/post')
const mongoose = require( 'mongoose' )
const { MONGO_URI } = require('../config/mongodb.json')

//  에러방지 옵션설정
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
} ) .then(() => console.log( "MongoDB Connected success !!" ))
    .catch(e => console.log( e ))

    router.post("/", function(req, res) {
        const { title, content } = req.body; // 비구조화 할당
        const postModel = new posts();
        postModel.title = title
        postModel.content = content
        postModel.save().then(newPost => {
          console.log('Create 완료!!')
          res.status(200).json({
            message: "Create success",
            data: {
              post: newPost
            }
          })
        }).catch(err => {
          res.status(500).json({
            message: err
          })
        })
      })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
