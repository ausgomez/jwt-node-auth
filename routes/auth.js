const router = require('express').Router()
const User = require('../models/User')
const { registerValidation } = require('../validation')

router.post('/register', async (req, res) => {
  // validate data
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  try {
    await user.save()
    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

//router.post('/login')

module.exports = router
