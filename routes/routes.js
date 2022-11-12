const express = require('express');
const router = express.Router();
const Shows = require('../model/Show');
const Show = require('../model/Show');

router.get('/', async (req, res) => {
    try {
        const shows = await Shows.find();
        res.render('pages/index', { shows });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
router.get('/:id', async (req, res) => {
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


router.post('/post', async (req, res) => {
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
router.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Shows.findByIdAndDelete(id);
        res.redirect('back');
    } catch (error) {
        res.status(400).json({ message: error });
    }
})
router.get('/updateOne/:id', async (req, res) => {
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


module.exports = router;