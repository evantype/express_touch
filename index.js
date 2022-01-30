import express from 'express';
import mongoose from 'mongoose'

const PORT = 5000;
const DB_URL = `mongodb+srv://epytnave:243598mo@cluster0.lnmpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json);

app.post('/', (req, res) => {
    res.status(200).json('Server working')
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