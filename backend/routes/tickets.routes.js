const express = require('express');
const router = express.Router();
const { obtenerTickets } = require('../controllers/tickets.controller');

// Ruta para listar tickets
router.get('/', obtenerTickets);

module.exports = router;
