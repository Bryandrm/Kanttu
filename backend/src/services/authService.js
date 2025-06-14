import prisma from '../db.js'
import bcrypt from 'bcrypt'

export async function registrarUsuario(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos' })
  }

  const existe = await prisma.usuario.findUnique({ where: { email } })
  if (existe) return res.status(409).json({ error: 'El usuario ya existe' })

  const hashed = await bcrypt.hash(password, 10)

  const nuevo = await prisma.usuario.create({
    data: { email, password: hashed }
  })

  res.status(201).json({ userId: nuevo.id, email: nuevo.email })
}