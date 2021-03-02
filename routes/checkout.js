const router = require("express").Router();
//const { create } = require("../controllers/invoiceController");
const Invoice = require("../models/invoice");

const stripe = require("stripe")(
  "sk_test_51IPhcIG7oxYUGKJCr6L1Htx1gIPshDLMp6gW1vkTl9dEmSJeVEPxqTJwU2c0xaoEklaTwFHEycrr5dUe36h4vaxg00vAFVLSjZ"
);

router.route("/checkout-session").get(async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.id, {
      expand: ["line_items"],
    });
    //console.log(session.line_items);
    //console.log(session.line_items.data);


    const invoiceObj = {
      storeID: "603e618ece6f293b0c07a67f",
      stripePaymentID: session.id,
      customerID: session.customer,
      customerEmail: session.customer_details.email,
      purchasedItems:
        session.line_items.data.map(item =>
        ({
          itemDescription: item.description,
          itemTotal: item.amount_total,
          itemQuantity: item.quantity,
        })
        ),
      purchaseTotal: session.amount_total / 100,
      status: session.payment_status,
    }
    //console.log(invoiceObj);
    Invoice.create(invoiceObj)
      .then((newInvoice) => {
        return res.json(session);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).end();
      })

  } catch (error) {
    console.log(error);
    return res.json(error);
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
