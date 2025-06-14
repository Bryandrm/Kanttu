import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las compras
export async function obtenerCompras() {
  return prisma.compra.findMany();
}

// Crear una nueva compra
export async function crearCompra(data) {
  return prisma.compra.create({
    data: {
      descripcion: data.descripcion,
      monto: data.monto,
      categoria: data.categoria,
      metodoRegistro: data.metodoRegistro,
      fecha: data.fecha ? new Date(data.fecha) : new Date(),
      usuarioId: data.usuarioId, 
    }
  });
}
