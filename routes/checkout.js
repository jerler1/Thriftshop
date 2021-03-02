const router = require("express").Router();

const stripe = require("stripe")(
  "sk_test_51IPhcIG7oxYUGKJCr6L1Htx1gIPshDLMp6gW1vkTl9dEmSJeVEPxqTJwU2c0xaoEklaTwFHEycrr5dUe36h4vaxg00vAFVLSjZ"
);

router.route("/checkout-session").get(async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.id, {
      expand: ["line_items"],
    });
    return res.json(session);
  } catch (error) {
    console.log(error);
    return res.json(errror);
  }
});
router.route("/create-checkout-session").post(async (req, res) => {
  console.log(req.body);
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
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: itemsInCheckout,
      mode: "payment",
      metadata: {
        store_id: req.body.cartItems[0].storefront,
      },
      success_url: `${process.env.PRODUCTION_URL}/success?id={CHECKOUT_SESSION_ID}` || "http://localhost:3000/success?id={CHECKOUT_SESSION_ID}",
      cancel_url: process.env.PRODUCTION_URL || "http://localhost:3000/",
    });
    return res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

module.exports = router;
