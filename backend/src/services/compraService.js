const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todas las compras
async function obtenerCompras() {
  return prisma.compra.findMany();
}

// Crear una nueva compra
async function crearCompra(data) {
  return prisma.compra.create({
    data: {
      descripcion: data.descripcion,
      monto: data.monto,
      categoria: data.categoria,
      metodoRegistro: data.metodoRegistro,
      fecha: data.fecha ? new Date(data.fecha) : new Date(), // Opcional
      // usuarioId: pendiente cuando tengamos usuarios
      // grupoId: pendiente cuando tengamos grupos
    }
  });
}

module.exports = {
  obtenerCompras,
  crearCompra,
};
