import express from 'express'
import { registrarUsuario } from '../services/authService.js'
const router = express.Router()

router.post('/register', registrarUsuario)

export default router