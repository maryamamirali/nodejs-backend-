import express from 'express';
import router from './route/index.js';
import db from './config/db.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

// Connect to DB when the server is initialized
db.connection.once('open', () => {
  console.log('db connected successfully!');
});

//http://localhost:3000
// Start server on port 3000
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

// Export the app for the Vercel serverless function
export default app;

