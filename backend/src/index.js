import authRouter from './routes/authRouter.js'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import compraRouter from './routes/compraRouter.js';
// Importar las dependencias necesarias

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


app.use('/auth', authRouter)

app.use('/compras', compraRouter);
