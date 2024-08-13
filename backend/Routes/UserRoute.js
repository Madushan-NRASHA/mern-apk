const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

router.get("/", UserController.getAllData);
router.post("/", UserController.addusers);
router.get("/:id",UserController.GetbyId);
router.put("/:id",UserController.UpdateUser);
router.delete("/:id",UserController.deleteUser);
module.exports = router;
