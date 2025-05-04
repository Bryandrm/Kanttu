
# 🛒 Kanttu

**Kanttu** es una aplicación **PWA Full Stack** diseñada para ayudarte a **registrar, categorizar y analizar tus compras**.  
Incluye funciones avanzadas como:

- 📊 Visualización de tendencias y categorías
- 👥 Soporte multiusuario
- 🧾 Gastos compartidos (parejas, grupos, hogar)
- 📷 Escaneo de códigos de barras (1D/2D)
- ⚙️ Soporte offline y sincronización automática

---

## 🚀 Tecnologías

| Área       | Tecnologías                                                   |
|------------|---------------------------------------------------------------|
| Frontend   | React, Vite, Tailwind CSS                                     |
| Backend    | Node.js, Express.js, Prisma                                   |
| Base Datos | SQLite (dev), PostgreSQL (prod)                               |
| DevOps     | Docker (opcional), GitHub Actions (CI/CD), ESLint             |

---

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/usuario/kanttu.git
cd kanttu
```

### 🛠️ Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### 🌐 Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## ⚙️ Variables de entorno

### backend/.env

```env
DATABASE_URL="file:./dev.db"
PORT=3001
```

### frontend/.env

```env
VITE_API_URL=http://localhost:3001
```

---

## 🧱 Estructura del proyecto

```
kanttu/
├── backend/           # API + Prisma
│   ├── src/
│   ├── prisma/
│   └── .env
├── frontend/          # SPA PWA en React
│   ├── src/
│   └── .env
└── README.md
```

---

## 🧪 Estado del desarrollo

- ✅ Backend funcional con CRUD de compras
- ✅ Frontend muestra y registra compras
- 🔄 Login y sistema de usuarios (en progreso)
- 🔜 Escaneo de códigos y gastos compartidos

---

## 🤝 Contribuciones

Este proyecto es personal pero ¡se aceptan ideas y feedback!  
Puedes abrir un issue o sugerencia si deseas aportar.

---

## 📄 Licencia

MIT – puedes usar, modificar y compartir libremente.

---

## 👤 Autor

Desarrollado por [@bryandrm97](https://github.com/bryandrm97)
