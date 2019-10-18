const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.get("/:username", (req, res) => {
  User.findOne({ username: req.params.username })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

module.exports = router;
