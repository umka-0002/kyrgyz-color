const express = require('express');
const Order = require('../models/Order');
const { verifyToken } = require('../middleware/auth');

require('dotenv').config();

const router = express.Router();

// Создание нового заказа
router.post('/', verifyToken, async (req, res) => {
  const { products, total } = req.body;

  const order = new Order({
    user: req.user.id,
    products,
    total,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Получение заказов текущего пользователя
router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
