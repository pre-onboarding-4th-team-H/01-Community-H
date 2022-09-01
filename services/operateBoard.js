const { OperateBoard } = require("../database/models");
const db = require("../database/models");
db.OperateBoard = OperateBoard;

const addOperateBoard = async (req, res) => {
  try {
    const { UserId, title, content } = req.body;
    const operateBoardInfo = {
      UserId,
      title,
      content
    };
    const existOperateBoard = await OperateBoard.findOne({ where: { title: title } });
    if (existOperateBoard) {
        return res.status(400).json({ Error: "Operate board already exists." });
    }
    const operateBoard = await OperateBoard.create(operateBoardInfo);
    return res.status(200).json(operateBoard);
	} catch (error) {
    return res.status(400).json({ Error: error.message });
  }
};

const getAllOperateBoards = async (req, res) => {
  try {
    const operateBords = await OperateBoard.findAll();
    return res.status(200).json(operateBords);
  } catch (error) {
    return res.status(400).json({ Error: error.message });
  }
};

const getOneOperateBoard = async (req, res) => {
  try {
    const operateBoardId = req.params.id;
    const operateBoard = await OperateBoard.findOne({ where: { id: operateBoardId } });
    return res.status(200).json(operateBoard);
  } catch (error) {
    return res.status(400).json({ Error: error.message });
  }
};

const updateOperateBoard = async (req, res) => {
  try {
    const operateBoardId = req.params.id;
    const updated = await OperateBoard.update(req.body, { where: { id: operateBoardId } });
    if (updated) {
      const updatedJopOpening = await OperateBoard.findOne({ where: { id: operateBoardId } });
      return res.status(200).json(updatedJopOpening);
    }
    throw new Error("Operate board not found.");
  } catch (error) {
    return res.status(400).json({ Error: error.message });
  }
};

const deleteOperateBoard = async (req, res) => {
  try {
    const operateBoardId = req.params.id;
    const deleted = await OperateBoard.destroy({ where: { id: operateBoardId } });
    if (deleted) {
      return res.status(200).json({ Message: "Operate board deleted." });
    }
    throw new Error("Operate board not found.");
  } catch (error) {
    return res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  addOperateBoard,
  getAllOperateBoards,
  getOneOperateBoard,
  updateOperateBoard,
  deleteOperateBoard,
};
