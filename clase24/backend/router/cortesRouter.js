const express = require("express");
const { getAllCortesController } = require("../controllers/cortesController");
const authMiddleware = require("../middlewares/authMiddleware");

const cortesRouter = express.Router();

cortesRouter.get("/", authMiddleware, getAllCortesController);

module.exports = cortesRouter;
