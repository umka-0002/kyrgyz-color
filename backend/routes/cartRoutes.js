const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

require('dotenv').config();

// Получить содержимое корзины
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Добавить товар в корзину
router.post('/', async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Если корзина уже существует, обновляем её
      const itemIndex = cart.items.findIndex(item => item.productId === productId);

      if (itemIndex > -1) {
        // Если товар уже есть в корзине, увеличиваем его количество
        let item = cart.items[itemIndex];
        item.quantity += quantity;
        cart.items[itemIndex] = item;
      } else {
        // Если товара нет в корзине, добавляем его
        cart.items.push({ productId, quantity });
      }
    } else {
      // Если корзины нет, создаем новую
      cart = new Cart({
        userId,
        items: [{ productId, quantity }]
      });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Удалить товар из корзины
router.delete('/:userId/:productId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (cart) {
      cart.items = cart.items.filter(item => item.productId !== req.params.productId);
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
