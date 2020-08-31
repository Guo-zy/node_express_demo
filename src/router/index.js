const express = require('express');
const router = express.Router();
const todoListService = require('../service/todoListService');
const currentDate = require('../utli/date');

router.post('/', async (req, res) => {
  try {
    const data = {
      ...req.body,
      isFinished: false,
      date: currentDate(),
    };
    await todoListService.create(data);
    res.json({
      status: 201,
      message: 'add data success',
    });
  } catch (e) {
    res.json({
      status: 400,
      message: e,
    });
  }
});

router.get('/', async (req, res) => {
  const dataList = await todoListService.findAll();
  res.json({
    status: 200,
    data: dataList.reverse(),
  });
});

router.get('/:id', async (req, res) => {
  try {
    const data = await todoListService.findById(req.params.id);
    res.json({
      status: 200,
      data,
    });
  } catch (e) {
    res.json({
      status: 404,
      message: 'No Found',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await todoListService.deleteById(req.params.id);
    res.json({
      status: 201,
      message: 'delete success',
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'No Found',
    });
  }
});

router.put('/', async (req, res) => {
  try {
    await todoListService.updateById(req.body);
    res.json({
      status: 201,
      message: 'update success',
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'Not Found',
    });
  }
});

module.exports = router;
