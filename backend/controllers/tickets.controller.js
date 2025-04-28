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
  const { titulo, descripcion, cliente, prioridad } = req.body;

  // Validaciones
  if (!titulo || titulo.trim().length < 5) {
    return res.status(400).json({ mensaje: 'El título es obligatorio y debe tener al menos 5 caracteres.' });
  }

  if (!descripcion || descripcion.trim().length < 10) {
    return res.status(400).json({ mensaje: 'La descripción es obligatoria y debe tener al menos 10 caracteres.' });
  }

  if (!cliente || cliente.trim().length === 0) {
    return res.status(400).json({ mensaje: 'El nombre del cliente es obligatorio.' });
  }

  const prioridadesValidas = ['baja', 'media', 'alta'];
  if (!prioridad || !prioridadesValidas.includes(prioridad.toLowerCase())) {
    return res.status(400).json({ mensaje: 'La prioridad debe ser baja, media o alta.' });
  }

  // Crear nuevo ticket
  const nuevoTicket = {
    id: tickets.length + 1,
    titulo: titulo.trim(),
    descripcion: descripcion.trim(),
    cliente: cliente.trim(),
    prioridad: prioridad.toLowerCase(),
    estado: 'abierto',
    createdAt: new Date().toISOString() // Guardamos fecha/hora actual en formato ISO
  };

  tickets.push(nuevoTicket);

  res.status(201).json(nuevoTicket);
};




module.exports = {
  obtenerTickets,
  obtenerTicketPorId,
  crearTicket,
};
