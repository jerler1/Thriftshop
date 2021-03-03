# **Thrift Store²**
![GitHub Repo stars](https://img.shields.io/github/stars/jerler1/Thriftshop?logo=GitHub&color=critical&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/jerler1/Thriftshop?color=critical&logo=github&style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/jerler1/Thriftshop?color=critical&logo=github&style=for-the-badge)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/jerler1/ThriftShop/main?color=critical&logo=github&style=for-the-badge)

## **Table of Contents**

---

1. [Installalation](#installation)
1. [Features](#features)
1. [Usage](#usage)
1. [Credits](#credits)
1. [Contributors](#contributors)
1. [See Also](#seeAlso)
1. [License](#license)

## **Installation**

---

To clone and run this application, you will need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) installed on your computer.  Inside of Node.js command line do the following:


>1. Clone the repository.<br/>`git clone https://github.com/jerler1/Thriftshop`
>1. Install the npm dependencies.<br/>`npm install`
>1. Run the seeds.<br/>`npm run seed`
>1. Start the server.<br/>`npm start`

## **Features**

---

Thrift Shop's Shop can perform the following:

- Display a storefront
- Responsive cart
- Mobile responsiveness
- Stripe integration
- Cloudinary integration
- Full CRUD inventory.

## **Usage**

---

When you access the deployed website or start the react server.  There are a number of columns (Image, Name, Phone, Email, and DOB) 
and a search input.  If you type anything into the search input it will filter the results that are shown below.  If you click any of the
table headers it will sort that column.  There isn't a sort on the image column.
![Screenshot](./public/applicationScreenshot.png)

Link to the deployed website can be found [here](https://thawing-everglades-67828.herokuapp.com/).

Link to the GitHub repository is [here](https://github.com/jerler1/Thriftshop).

## **Credits**

---

This software uses the following packages:

- [Stripe](https://www.npmjs.com/package/stripe)
- [Cloudinary](https://www.npmjs.com/package/cloudinary-react)
- [Swiper](https://www.npmjs.com/package/swiper)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [NodeMailer](https://www.npmjs.com/package/nodemailer)

## **Contributors**

---

- [Bradley Donahue](https://github.com/brhue)
- [John Erler](https://github.com/jerler1)
- [Nathan Castaldi](https://github.com/ncastaldi)
- [Spencer Vaughan](https://github.com/spencerv86)

## **License**

---

Copyright (c) 2005-2020 David Heinemeier Hansson

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
