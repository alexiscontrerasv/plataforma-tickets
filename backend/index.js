const express = require('express');
const app = express();
const PORT = 3000;

// Importamos las rutas
const ticketsRoutes = require('./routes/tickets.routes');

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la Plataforma de Tickets!');
});

// Middleware para rutas de tickets
app.use('/tickets', ticketsRoutes);

// Servidor corriendo
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
