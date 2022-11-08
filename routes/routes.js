const express = require('express');
const router = express.Router();
const Model = require('../model/Show');

// Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
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
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API');
})

// Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API');   
})

module.exports = router;