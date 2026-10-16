// Placeholder for Stripe checkout route
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET || '');

// POST /api/checkout - create a payment intent (placeholder)
router.post('/', async (req, res) => {
  try {
    const { amount } = req.body; // amount in cents
    if (!process.env.STRIPE_SECRET) return res.status(500).json({ message: 'Stripe secret not configured' });
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Stripe error' });
  }
});

module.exports = router;
