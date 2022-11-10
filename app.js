const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
const Shows = require('./model/Show');
const Show = require('./model/Show');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);
app.use(express.static('views/pages/css'))

app.get('/', async (req, res) => {
    try {
        const shows = await Shows.find();
        res.render('pages/index', { shows });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
app.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const show = await Shows.findById(id);
        if (show !== null) {   
            res.render('pages/show', { show })
        } else {
            res.status(400).send(`Nu e niciun serial cu id-ul ${id}`);
        }
    } catch (error) {
        res.status(500).send(`Nu e niciun serial cu id-ul ${id}`);
    }
})


app.post('/create', async (req, res) => {
    const { name, description } = req.body;
    const data = new Show({
        name: name,
        description: description,
    })
    try {
        await data.save()
    } catch (error) {
        res.status(400).json({ message: error })
    }
    res.redirect('back');
})
app.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Shows.findByIdAndDelete(id);
        res.redirect('back');
    } catch (error) {
        res.status(400).json({ message: error });
    }
})
app.get('/updateOne/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.query;
        if (updatedData.completed === 'on') {
            updatedData.completed = true;
        } else {
            updatedData.completed = false;
        }
        const options = { new: true };
        await Show.findByIdAndUpdate(id, updatedData, options);
        res.redirect('back');
    } catch (error) {
        res.status(400).json({ message: error });
    }
})


mongoose.connect(process.env.MONGO_URI);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('Database Connected');
})

port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
