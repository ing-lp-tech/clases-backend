const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");

const nodemailer = require("nodemailer");

dotenv.config();

const db = require("./config/dbConfig");

const serviceProduct = require("./services/products/serviceProduct");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

/* class MailingService {
  constructor() {
    this.transport = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.GMAIL_USER,

        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }
}

const mailerService = new MailingService(); */

/* to: "ing.lp.tech@gmail.com", */

/* const mail = {
  from: process.env.GMAIL_USER,

  to: process.env.GMAIL_USER,

  subject: "Soy un mail de prueba",

  html: `
  <h1>este es un mail</h1>
  <span>este es un parrafo</span>
  <h4>texto h4</h4>
  <a href="google.com">google</a>
  <img src="https://cdn.eldestapeweb.com/eldestape/122020/1607280359573/diego_maradona_escudo_boca_homenaje_tras_su_muerte_foto.jpg">
  `,
}; */
/* text: "prueba", */

/* mailerService.transport.sendMail(mail, (error, info) => {
  if (error) {
    console.log("No se pudo enviar el mensaje");
  } else {
    console.log("mensaje enviado con exito");
  }
}); */

// GET
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;

  const product = serviceProduct.getProductById(productId);

  console.log("product", product);

  if (product) {
    res.status(200).json({ ok: true, message: "Product found", data: product });
  } else {
    res.status(404).json({ ok: false, message: "Not found", data: product });
  }
});

app.listen(PORT, () => {
  console.log(
    `El servidor se esta escuchando en direccion: http://localhost:${PORT}`
  );
});
