const express = require('express');

const router = express.Router();

const userListController = require('../controllers/userList');

router.get('/', userListController.displayUser);

module.exports = router;
