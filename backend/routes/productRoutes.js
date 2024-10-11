const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Получение всех продуктов
router.get('/', productController.getAllProducts);

// Получение продукта по ID
router.get('/:id', productController.getProductById);

// Создание нового продукта
router.post('/', productController.createProduct);

// Обработчик для поиска продуктов
router.get('/search', productController.searchProducts);

module.exports = router;
