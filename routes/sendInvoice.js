const router = require("express").Router();

router
    .route("/")
    .post("/send", (req, res) => {
        const invoiceBody = `
            <p>Test Email</p>`;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "",
                pass: "",
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"ThriftShopShop" <nathan@castaldi.dev>', // sender address
            to: "nathan@castaldifamily.com", // list of receivers
            subject: "Testing Nodemailer", // Subject line
            text: "Is this thing on?", // plain text body
            html: invoiceBody, // html body
        });

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    })