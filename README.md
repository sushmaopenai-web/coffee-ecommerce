# Coffee E-commerce

Starter monorepo for a coffee ecommerce website.

Tech stack
- React (client)
- Express + Node (server)
- MongoDB (mongoose)
- Stripe (payment integration placeholders)

Quick start

1. Clone the repo
   git clone https://github.com/sushmaopenai-web/coffee-ecommerce.git

2. Start server
   cd coffee-ecommerce/server
   npm install
   cp .env.example .env
   # set MONGO_URI and STRIPE_SECRET in .env
   npm run dev

3. Start client
   cd ../client
   npm install
   npm start

What's included
- server/: Express API with Product model and sample routes
- client/: React app that fetches products from the API
- README with setup instructions

Next steps
- Wire up Stripe keys and real checkout flow
- Add authentication and admin product CRUD UI
- Add tests and CI
