const router = require("express").Router();

const stripe = require("stripe")(
  pk_test_51IPhcIG7oxYUGKJCY4GkNWBFbgXwvNKTlmmJNeLOarK1J3DSvpvI9f65OcfurdeT8zKz3vmO5eUlnP5n3AIfKR1C00tL4qrsVY
);

router.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://www.google.com",
    cancel_url: "https://www.bing.com",
  });

  res.json({ id: session.id });
});
