const express = require('express');
const router = express.Router();
const { obtenerTickets, obtenerTicketPorId, crearTicket } = require('../controllers/tickets.controller');

// Ruta para listar tickets
router.get('/', obtenerTickets);

//Nueva ruta: obtener un ticket por ID
router.get('/:id', obtenerTicketPorId);

// Crear nuevo ticket
router.post('/', crearTicket);

module.exports = router;
