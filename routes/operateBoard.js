const express = require("express");
const router = express.Router();
const operateBoardService = require("../services/operateBoard.js");
const { boardValidator } = require("../middlewares/validator/boardValidator");

router.post("/", boardValidator(), operateBoardService.addOperateBoard);
router.get("/", operateBoardService.getOperateBoards);
router.get("/:id", operateBoardService.getOperateBoard);
router.patch("/:id", boardValidator(), operateBoardService.setOperateBoard);
router.delete("/:id", boardValidator(), operateBoardService.deleteOperateBoard);

module.exports = router;
