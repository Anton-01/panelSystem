const express = require('express')
const testController = require('../controllers/testController')

const app = express.Router();
app.get('/testProof', testController.testProof);

module.exports = app;