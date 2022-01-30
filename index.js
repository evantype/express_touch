import express from 'express';

const PORT = 5000;

const app = express();

app.use(express.json);

app.post('/', (req, res) => {
    res.status(200).json('Server working')
})

app.listen(PORT, () => console.log('Server started on port ' + PORT));