const { v4: uuidv4 } = require("uuid");
const { OperateBoard } = require("../database/models");
const db = require("../database/models");
db.OperateBoard = OperateBoard;

const addOperateBoard = async (req, res, next) => {
  try {
    const { UserId, title, content } = req.body;
    const operateBoardInfo = {
      UserId: uuidv4(),
      title,
      content
    };
    const operateBoard = await OperateBoard.create(operateBoardInfo);
    return res.status(200).json(operateBoard);
	} catch (error) {
    next(err);
  }
};

const getOperateBoards = async (req, res, next) => {
  try {
    const operateBords = await OperateBoard.findAll();
    return res.status(200).json(operateBords);
  } catch (error) {
    next(err);
  }
};

const getOperateBoard = async (req, res, next) => {
  try {
    const operateBoardId = req.params.id;
    const operateBoard = await OperateBoard.findOne({ where: { id: operateBoardId } });
    return res.status(200).json(operateBoard);
  } catch (error) {
    next(err);
  }
};

const setOperateBoard = async (req, res, next) => {
  try {
    const operateBoardId = req.params.id;
    const updated = await OperateBoard.update(req.body, { where: { id: operateBoardId } });
    if (updated) {
      const updatedJopOpening = await OperateBoard.findOne({ where: { id: operateBoardId } });
      return res.status(200).json(updatedJopOpening);
    }
    throw new Error("Operate board not found.");
  } catch (error) {
    next(err);
  }
};

const deleteOperateBoard = async (req, res, next) => {
  try {
    const operateBoardId = req.params.id;
    const deleted = await OperateBoard.destroy({ where: { id: operateBoardId } });
    if (deleted) {
      return res.status(200).json({ Message: "Operate board deleted." });
    }
    throw new Error("Operate board not found.");
  } catch (error) {
    next(err);
  }
};

module.exports = {
  addOperateBoard,
  getOperateBoards,
  getOperateBoard,
  setOperateBoard,
  deleteOperateBoard,
};
