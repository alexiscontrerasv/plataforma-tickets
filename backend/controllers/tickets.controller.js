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

  // Validar que el título exista
  if (!titulo) {
    return res.status(400).json({ mensaje: 'El título es obligatorio' });
  }

  // Validar que no esté vacío o solo espacios
  const tituloLimpio = titulo.trim();
  if (tituloLimpio.length === 0) {
    return res.status(400).json({ mensaje: 'El título no puede estar vacío o solo con espacios' });
  }

  // Validar que tenga mínimo 5 caracteres reales
  if (tituloLimpio.length < 5) {
    return res.status(400).json({ mensaje: 'El título debe tener al menos 5 caracteres' });
  }

  // Crear nuevo ticket
  const nuevoTicket = {
    id: tickets.length + 1,
    titulo: tituloLimpio, // guardamos el título limpio
    estado: 'abierto'
  };

  tickets.push(nuevoTicket);

  res.status(201).json(nuevoTicket);
};



module.exports = {
  obtenerTickets,
  obtenerTicketPorId,
  crearTicket,
};
