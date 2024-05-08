const express = require('express');
const router = express.Router();
const heroisController = require('../controllers/heroisController');


router.get('/herois', heroisController.getAllHerois);
router.post('/herois', heroisController.createHerois);
router.delete('/herois/:id_heroi', heroisController.updateHerois);
router.put('/herois/:id_heroi', heroisController.createHerois);
