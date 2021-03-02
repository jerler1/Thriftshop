const router = require("express").Router();
const { create } = require("../controllers/invoiceController");

const stripe = require("stripe")(
  "sk_test_51IPhcIG7oxYUGKJCr6L1Htx1gIPshDLMp6gW1vkTl9dEmSJeVEPxqTJwU2c0xaoEklaTwFHEycrr5dUe36h4vaxg00vAFVLSjZ"
);

router.route("/checkout-session").get(async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.id, {
      expand: ["line_items"],
    });
    //console.log(session.line_items);
    const invoiceObj = {
      storeID: "",
      stripePaymentID: session.id,
      customerID: session.customer,
      customer: session.customer_details.email,
      // purchasedItems: [
      //   {
      //     itemDescription: session.line_items.data[0].description,
      //     itemAmount: session.line_items.data[0].amount_total / 100,
      //     itemQuantity: session.line_items.data[0].quantity
      //   }
      // ],
      purchasedItems: session.line_items.data.map(item => {
        [{
          itemDescription: item.description,
          itemAmount: item.amount_total / 100,
          itemQuantity: item.quantity
        }]
      }),
      purchaseTotal: session.amount_total / 100,
      status: session.payment_status,
    }
    console.log(invoiceObj);
    //create(invoiceObj);
    return res.json(session);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
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
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: itemsInCheckout,
      mode: "payment",
      success_url: "http://localhost:3000/success?id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://example.com/cancel.html",
    });
    return res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

module.exports = router;
