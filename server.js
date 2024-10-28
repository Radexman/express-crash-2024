import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 8000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
	{
		id: 1,
		title: 'Post One',
	},
	{
		id: 2,
		title: 'Post Two',
	},
	{
		id: 3,
		title: 'Post Three',
	},
];

// Get all posts
app.get('/api/posts', (req, res) => {
	const limit = parseInt(req.query.limit);
	if (!isNaN(limit) && limit > 0) {
		res.status(200).json(posts.slice(0, limit));
	} else {
		res.status(200).json(posts);
	}
});

// Get single post
app.get('/api/posts/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);

	if (!post) {
		res.status(404).json({ message: `A post with the id of ${id} was not found` });
	} else {
		res.status(200).json(post);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
