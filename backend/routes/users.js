const express = require('express');
const router = express.Router();
const User = require('../model/user')
const bcrypt = require('bcryptjs')

router.post('/', async (req, res, next) => {
  const { number, id, password, name } = req.body
  try {
    let user = await User.findOne({ id })
    if(user) {
      return res.status(400).json({errors: [{ msg: "User already exists" }] })
    }

    user = new User({
      number,
      id,
      password,
      name
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    res.send({
      data: {
        msg: "Success",
        user: user
      }
    })

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
