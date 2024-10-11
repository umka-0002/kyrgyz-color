const Product = require('../models/Product');

// Получение всех продуктов
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Получение продукта по ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Создание нового продукта
exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  const product = new Product({
    name,
    description,
    price,
    imageUrl,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Обработчик для поиска продуктов
exports.searchProducts = async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({ name: { $regex: query, $options: 'i' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
