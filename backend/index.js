const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Importamos las rutas
// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

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
