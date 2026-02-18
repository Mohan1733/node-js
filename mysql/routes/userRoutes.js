const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.getCreateUser);
router.put("/:id", userController.getUpdateUser);
router.delete("/:id", userController.getDeleteUser);

module.exports = router;
