const express = require('express');
const router = express.Router();

const {getUser,createUser} = require('../functions/userFunction');

router.get('/', async (req, res) => {
  const users = await getUser();
  res.json(users).status(200);
}
);

router.post('/', async (req, res) => {
  const user = await createUser(req.body);
  res.json(user).status(201);
});

module.exports = router;



