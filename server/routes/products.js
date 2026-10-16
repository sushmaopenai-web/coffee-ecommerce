const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products - list products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(50);
    if (products.length === 0) {
      // return sample data if DB empty
      return res.json([
        {
          _id: 'sample1',
          name: 'House Blend Coffee',
          description: 'Smooth and balanced medium roast',
          price: 12.99,
          image: '/images/house-blend.jpg',
          category: 'blends',
          countInStock: 100,
        },
        {
          _id: 'sample2',
          name: 'Ethiopian Single Origin',
          description: 'Floral notes with bright acidity',
          price: 15.99,
          image: '/images/ethiopian.jpg',
          category: 'single-origin',
          countInStock: 50,
        }
      ]);
    }
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
