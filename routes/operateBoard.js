const express = require("express");
const router = express.Router();

const operateBoardService = require("../services/operateBoard.js");

router.post("/", operateBoardService.addOperateBoard);
router.get("/", operateBoardService.getAllOperateBoards);
router.get("/:id", operateBoardService.getOneOperateBoard);
router.put("/:id", operateBoardService.updateOperateBoard);
router.delete("/:id", operateBoardService.deleteOperateBoard);

module.exports = router;
