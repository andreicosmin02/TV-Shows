const express = require('express');
const router = express.Router();
const Show = require('../model/Show');

// Post Method
router.post('/post', async (req, res) => {
    const data = new Show({
        name: req.body.name,
        description: req.body.description,
        review: req.body.review,
        completed: req.body.completed,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch(error) {
        res.status(400).json({ message: error });
    }
});

// Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Show.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Show.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Show.findByIdAndUpdate(id, updatedData, options);
    } catch (error) {
        res.status(400).json({ message: error });
    }
})

// Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Show.findByIdAndDelete(id);
        res.send(`Document with id ${id} has been deleted...`);
    } catch (error) {
        res.status(400).json({ message: error });
    }
})

module.exports = router;