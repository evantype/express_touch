import express from 'express';
import mongoose from 'mongoose'
import Post from "./Post.js";

const PORT = 5000;
const DB_URL = `mongodb+srv://user:123@cluster0.lnmpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body;

        const post = await Post.create({author, title, content, picture});

        res.json(post)
    } catch (e) {
        res.status(500).json(e);
    }
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('Server started on port ' + PORT));
    } catch (e) {
        console.log(e)
    }
}

startApp();