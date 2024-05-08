const express = require('express');
const router = express.Router();
const batalhasController = require('../controllers/batalhasController');



router.get('/batalhas/:heroi1_id/:heroi2_id', batalhasController.getAllBatalhas);
router.get('/batalhas', batalhasController.getIDBatalhas);