let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let userSchema = require('../models/user');

// CREATE User
router.route('/create-user').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ User
router.route('/signIn').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

 
// Get Single user by user id
router.route('/:userid').get((req, res) => {
 
  console.log('req.params.userid='+req.params.userid);
  
 
  userSchema.find({userid: req.params.userid}, (error, data) => {
    console.log('error=' +error);
    console.log('data='+data);
  if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})  

// Get Single user
router.route('/edit-user/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
router.route('/update-user/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('User updated successfully !')
    }
  })
})

// Delete User
router.route('/delete-user/:id').delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;