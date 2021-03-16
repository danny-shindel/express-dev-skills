var express = require('express');
var router = express.Router();

//controler
var skillsCtrl = require('../controllers/skills');

/* all paths start with '/skills' */
// get skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);


module.exports = router;
