import express from 'express';
import dotenv from 'dotenv';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
