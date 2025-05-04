const express = require('express');
const { obtenerCompras, crearCompra } = require('../services/compraService');

const router = express.Router();

// GET /compras - Listar todas las compras
router.get('/', async (req, res) => {
  try {
    const compras = await obtenerCompras();
    res.json(compras);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener compras');
  }
});

// POST /compras - Crear una nueva compra
router.post('/', async (req, res) => {
  try {
    const compra = await crearCompra(req.body);
    res.status(201).json(compra);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la compra');
  }
});

module.exports = router;