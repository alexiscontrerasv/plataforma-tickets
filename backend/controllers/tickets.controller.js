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

// Función para crear un nuevo ticket
const crearTicket = (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ mensaje: 'El titulo es obligatorio' });
  }

  const nuevoTicket = {
    id: tickets.length + 1, //Generamos un id simple
    titulo,
    estado: 'abierto' //estado por defecto
  };

  tickets.push(nuevoTicket);
  res.status(201).json(nuevoTicket);
};



module.exports = {
  obtenerTickets,
  obtenerTicketPorId,
  crearTicket,
};
