const express = require('express');
const router = express.Router();
const { obtenerTickets, obtenerTicketPorId } = require('../controllers/tickets.controller');

// Ruta para listar tickets
router.get('/', obtenerTickets);

//Nueva ruta: obtener un ticket por ID

router.get('/:id', obtenerTicketPorId);

module.exports = router;
