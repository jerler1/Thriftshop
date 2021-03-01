const router = require("express").Router();

const stripe = require("stripe")(
    "sk_test_51IPhcIG7oxYUGKJCr6L1Htx1gIPshDLMp6gW1vkTl9dEmSJeVEPxqTJwU2c0xaoEklaTwFHEycrr5dUe36h4vaxg00vAFVLSjZ"
);

router
    .route("/")
    .post(async (req, res) => {
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

module.exports = router;