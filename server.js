import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';

const PORT = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
