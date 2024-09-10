// Create web server
// Create a route for the comments
// Create a route for the comments/new
// Create a route for the comments/:id
// Create a route for the comments/:id/edit
// Create a route for the comments/:id/delete
// Create a route for the comments/:id/like

const express = require("express");
const router = express.Router();
const comments = require("../data/comments");

router.get("/", (req, res) => {
    res.json(comments);
});

router.get("/new", (req, res) => {
    res.json("Create a new comment");
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    let found = false;
    for (let i = 0; i < comments.length; i++) {
        if (comments[i]._id === id) {
            res.json(comments[i]);
            found = true;
            break;
        }
    }
    if (!found) {
        res.status(404).json("Comment not found.");
    }
});

router.get("/:id/edit", (req, res) => {
    let id = req.params.id;
    let found = false;
    for (let i = 0; i < comments.length; i++) {
        if (comments[i]._id === id) {
            res.json("Edit comment with id: " + id);
            found = true;
            break;
        }
    }
    if (!found) {
        res.status(404).json("Comment not found.");
    }
});

router.get("/:id/delete", (req, res) => {
    let id = req.params.id;
    let found = false;
    for (let i = 0; i < comments.length; i++) {
        if (comments[i]._id === id) {
            res.json("Delete comment with id: " + id);
            found = true;
            break;
        }
    }
    if (!found) {
        res.status(404).json("Comment not found.");
    }
});

router.get("/:id/like", (req, res) => {
    let id = req.params.id;
    let found = false;
    for (let i = 0; i < comments.length; i++) {
        if (comments[i]._id === id) {
            comments[i].numLikes++;
            res.json(comments[i]);
            found = true;
            break;
        }
    }
});

