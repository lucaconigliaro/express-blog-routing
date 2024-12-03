const express = require(`express`);
const router = express.Router();
const posts = require("../data");

// Index
router.get(`/`, (req, res) => {
    res.json(posts);
});

// Show
router.get(`/:id`, (req, res) => {
    const postsId = req.params.id;
    res.json("Prelevo i dettagli del post " + postsId);
});

// Create
router.post("", (req, res) => {
    res.json("Aggiungo un nuovo post");
});

// Update 
router.put(`/:id`, (req, res) => {
    const postsId = req.params.id;
    res.json("Aggiorno tutti i dati del post " + postsId);
});

// Delete
router.delete(`/:id`, (req, res) => {
    const postsId = req.params.id;
    res.json("Cancellazione del post " + postsId);
});

module.exports = router;