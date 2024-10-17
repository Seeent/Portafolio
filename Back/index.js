const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola, desde el servidor!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});