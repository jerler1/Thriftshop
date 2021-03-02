const router = require("express").Router();
const Invoice = require("../models/invoice");
const Storefront = require("../models/storefront");
const nodemailer = require("nodemailer");

const stripe = require("stripe")(
  "sk_test_51IPhcIG7oxYUGKJCr6L1Htx1gIPshDLMp6gW1vkTl9dEmSJeVEPxqTJwU2c0xaoEklaTwFHEycrr5dUe36h4vaxg00vAFVLSjZ"
);

router.route("/checkout-session").get(async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.id, {
      expand: ["line_items"],
    });

    const invoiceObj = {
      storeID: session.metadata.store_id,
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

    Invoice.create(invoiceObj)
      .then((newInvoice) => {
        session.invoiceNumber = newInvoice._id;
        Storefront.findOneAndUpdate(
          { _id: newInvoice.storeID },
          { $push: { invoices: [newInvoice._id] } }
        )
          .then(() => {

            console.log("Get ready to send mail!");

            nodemailer.createTestAccount((err, account) => {
              if (err) {
                console.error('Failed to create a testing account. ' + err.message);
                return process.exit(1);
              }

              console.log('Credentials obtained, sending message...');

              // Create a SMTP transporter object
              let transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                  user: account.user,
                  pass: account.pass
                }
              });

              // Message object
              let message = {
                from: 'Sender Name <sender@example.com>',
                to: session?.customer_details?.email,
                subject: "Thrift Store Reciept",
                text: 'Hello to myself!',
                html: '<p><b>Hello</b> to myself!</p>'
              };

              transporter.sendMail(message, (err, info) => {
                if (err) {
                  console.log('Error occurred. ' + err.message);
                  return process.exit(1);
                }

                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
              });
            });
          }).catch((err) => {
            res.status(500).end();
          })
      })
      .then(() => {
        return res.json(session);
      }).catch((err) => {
        console.log(err);
        res.status(500).end();
      });
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
          images: item.image.map(img => {
            try {
              const url = new URL(img);
              return url;
            } catch (e) {
              return process.env.PRODUCTION_URL ? `${process.env.PRODUCTION_URL}${img}` : `http://localhost:3000${img}`;
            }
          }),
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
