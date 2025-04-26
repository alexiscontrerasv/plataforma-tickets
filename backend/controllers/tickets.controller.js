const tickets = require('../data/tickets.data');

const obtenerTickets = (req, res) => {
  res.json(tickets);
};

module.exports = {
  obtenerTickets,
};
