const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/user-queries');

// Returns user's information
router.get(`/:userId`, (req, res) => {
  const userId = req.params.userId;
  userQueries.getUserInfo(userId)
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Registers new user
router.post(`/new`, (req, res) => {
  const body = req.body;
  userQueries.registerUser(body)
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// Updates user's information
router.post(`/:userId`, (req, res) => {
  const userId = req.params.userId;
  const body = req.body;
  userQueries.updateUserInfo(userId, body)
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
