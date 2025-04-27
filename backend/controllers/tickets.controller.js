const tickets = require('../data/tickets.data');

const obtenerTickets = (req, res) => {
  res.json(tickets);
};

//Función para obtener un ticket específico por ID
const obtenerTicketPorId = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const ticket = tickets.find(t => t.id === id);

  if(!ticket) {
    return res.status(404).json({ mensaje: 'Ticket no encontrado' });
  }
  
  res.json(ticket);
};


module.exports = {
  obtenerTickets,
  obtenerTicketPorId,
};
