const router = require("express").Router();
const Invoice = require("../models/invoice");
const Inventory = require("../models/inventory");
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

    const itemIdList = JSON.parse(session.metadata.item_id);
    itemIdList.forEach(async (itemSold) => {
      await Inventory.findOneAndUpdate(
        { _id: itemSold.itemId },
        { status: "Sold" }
      )
    });

    Invoice.create(invoiceObj)
      .then((newInvoice) => {
        session.invoiceNumber = newInvoice._id;
        Storefront.findOneAndUpdate(
          { _id: newInvoice.storeID },
          { $push: { invoices: [newInvoice._id] } }
        )
          .then(() => {
            nodemailer.createTestAccount((err, account) => {
              if (err) {
                console.error('Failed to create a testing account. ' + err.message);
                return process.exit(1);
              }

              console.log('Credentials obtained, sending message...');

              const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                  user: process.env.INVOICE_EMAIL,
                  pass: process.env.INVOICE_PASSWORD
                }
              });

              // Message object
              let message = {
                from: 'Thrift Shop <checkout@thriftshop.com>',
                to: session?.customer_details?.email,
                subject: `Thrift Store Reciept: ${session.payment_status}`,
                html: `
                <!doctype html>
                <html>
                <head>
                  <meta charset="utf-8">
                </head>
   
                <style>
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #eee;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                    font-size: 16px;
                    line-height: 24px;
                    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                    color: #555;
                }
                
                .invoice-box table {
                    width: 100%;
                    line-height: inherit;
                    text-align: left;
                }
                
                .invoice-box table td {
                    padding: 5px;
                    vertical-align: top;
                }
                
                .invoice-box table tr td:nth-child(2) {
                    text-align: right;
                }
                
                .invoice-box table tr.top table td {
                    padding-bottom: 20px;
                }
                
                .invoice-box table tr.top table td.title {
                    font-size: 45px;
                    line-height: 45px;
                    color: #333;
                }
                
                .invoice-box table tr.information table td {
                    padding-bottom: 40px;
                }
                
                .invoice-box table tr.heading td {
                    background: #eee;
                    border-bottom: 1px solid #ddd;
                    font-weight: bold;
                }
                
                .invoice-box table tr.details td {
                    padding-bottom: 20px;
                }
                
                .invoice-box table tr.item td{
                    border-bottom: 1px solid #eee;
                }
                
                .invoice-box table tr.item.last td {
                    border-bottom: none;
                }
                
                .invoice-box table tr.total td:nth-child(2) {
                    border-top: 2px solid #eee;
                    font-weight: bold;
                }
                
                @media only screen and (max-width: 600px) {
                    .invoice-box table tr.top table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                    }
                    
                    .invoice-box table tr.information table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                    }
                }
                .hero-block {
                  background-color: rgba(0, 0, 0, 0.5);
                }
                
                .hero-title {
                  text-align: center;
                  color: #ffe08a;
                  font-size: 9vw;
                  text-shadow: -0.5px -0.5px 0 rgb(42, 42, 42), 0.5px -0.5px 0 rgb(42, 42, 42),
                    -0.5px 0.5px 0 rgb(42, 42, 42), 0.5px 0.5px 0 rgb(42, 42, 42);
                }
                
                /** RTL **/
                .rtl {
                    direction: rtl;
                    font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                }
                
                .rtl table {
                    text-align: right;
                }
                
                .rtl table tr td:nth-child(2) {
                    text-align: left;
                }
                </style>
            </head>
            
            <body>
                <div class="invoice-box">
                    <table cellpadding="0" cellspacing="0">
                        <tr class="top">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td class="title">
                                        <p className="title hero-title">Thrift Shop²</p>
                                        </td>
                                                                    <td>
                                            Nathan's Thrift Shop<br>
                                            123 Main St<br>
                                            Atlanta, GA 12345<br><br>
                                           
                                            Invoice #: ${session.invoiceNumber}<br>
                                                                    
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                        <tr class="heading">
                            <td>
                                Item
                            </td>
                            
                            <td>
                                Price
                            </td>
                        </tr>
                        ${session.line_items.data.map(item => (
                  `<tr class="item">
                    <td>
                      ${item.description}
                    </td>

                    <td>
                      $${item.amount_total / 100}
                    </td>
                  </tr>`
                )).join("")}
                       

                        <tr class="total">
                            <td></td>
                            
                            <td>
                               Total: $${session.amount_total / 100}
                            </td>
                        </tr>
                    </table>
                </div>
                </html>
                `,
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
  console.log(req.body.cartItems);
  const itemIdList = req.body.cartItems.map((item) => {
    return {
      itemId: item._id,
    }
  })
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
        item_id: JSON.stringify(itemIdList),
      },
      success_url: process.env.PRODUCTION_URL ? `${process.env.PRODUCTION_URL}/success?id={CHECKOUT_SESSION_ID}` : "http://localhost:3000/success?id={CHECKOUT_SESSION_ID}",
      cancel_url: process.env.PRODUCTION_URL ? process.env.PRODUCTION_URL : "http://localhost:3000/",
    });
    return res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

module.exports = router;
