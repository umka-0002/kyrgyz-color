const request = require('supertest');
const app = require('../server');
const Product = require('../models/Product');

describe('Product API', () => {
  beforeEach(async () => {
    await Product.deleteMany();
  });

  afterEach(async () => {
    await Product.deleteMany();
  });

  test('GET /api/products - should return all products', async () => {
    const product = new Product({ name: 'Test Product', description: 'Test Description', price: 100, imageUrl: 'http://example.com/image.jpg' });
    await product.save();

    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe('Test Product');
  });

  test('POST /api/products - should create a new product', async () => {
    const newProduct = { name: 'New Product', description: 'New Description', price: 200, imageUrl: 'http://example.com/newimage.jpg' };
    
    const response = await request(app).post('/api/products').send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('New Product');

    const product = await Product.findOne({ name: 'New Product' });
    expect(product).not.toBeNull();
  });
});
