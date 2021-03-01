const router = require("express").Router();

const stripe = require("stripe")(
  "sk_test_51IPhcIG7oxYUGKJCr6L1Htx1gIPshDLMp6gW1vkTl9dEmSJeVEPxqTJwU2c0xaoEklaTwFHEycrr5dUe36h4vaxg00vAFVLSjZ"
);

router.route("/checkout-session").get(async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.id, {
    expand: ["line_items"],
  });
  res.json(session);
});
router.route("/create-checkout-session").post(async (req, res) => {
  const itemsInCheckout = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.image,
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: itemsInCheckout,
    mode: "payment",
    success_url: "https://example.com/success.html",
    cancel_url: "https://example.com/cancel.html",
  });
  res.json({ id: session.id });
});

module.exports = router;
