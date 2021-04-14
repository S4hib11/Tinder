import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App Config
const app = express();
const port = process.env.port || 8001;
const connection = 'mongodb+srv://admin:<password>@cluster0.fo061.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Middlewares
app.use(express.json())
app.use(Cors());
//DB Config
mongoose.connect(connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    });
});

//Listeners
app.listen(port, () => console.log(`listeneing on localhost ${port}`));
