var express = require('express'); 
var router = express.Router();
var homeController = require('../controller/home.js')

router.get('/' , homeController.index)

module.exports = router