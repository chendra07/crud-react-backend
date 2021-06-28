const express = require("express");
const user = require("../services/usersDataset.services");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //TODO get data from db
    res.json(await user.getAllUsers());
  } catch {
    console.log("ERROR!", error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json(await user.getUserById(req.params.id));
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    //TODO get data from db
    res.json(await user.createUser(req.body));
  } catch (error) {
    console.log("ERROR!", error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(await user.editUser(req.params.id, req.body));
  } catch (error) {
    console.log("error update!", error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await user.deleteUser(req.params.id));
  } catch (error) {
    console.log("error delete!", error.message);
  }
});

module.exports = router;
