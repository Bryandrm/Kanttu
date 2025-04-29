const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const compraRouter = require('./routes/compraRouter');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.send('✅ Backend funcionando correctamente');
});

app.get('/test-prisma', async (req, res) => {
  try {
    // Insertar una compra dummy
    await prisma.compra.create({
      data: {
        descripcion: 'Compra de prueba',
        monto: 25.50
      }
    });

    // Obtener todas las compras
    const compras = await prisma.compra.findMany();

    res.json(compras);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al interactuar con la DB');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});

app.use('/compras', compraRouter);
