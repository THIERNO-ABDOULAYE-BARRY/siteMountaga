const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Fonction d'envoi d'e-mail
function sendOrderEmail(orderData) {
  const { nom, email, adresse, telephone, produits, total } = orderData;

  const productListHtml = produits.map((product) => `
    <div style="margin-bottom: 20px;">
      <img src="http://localhost:3000${product.image}" alt="${product.name}" width="100" />
      <p><strong>${product.name}</strong></p>
      <p>Prix: ${product.new_price} €</p>
      <p>Quantité: ${product.quantity}</p>
    </div>
  `).join('');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // ou tu peux mettre "email" si tu veux l'envoyer au client
    subject: '🛒 Nouvelle commande reçue',
    html: `
      <h2>🧾 Détails de la commande</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email || 'Non fourni'}</p>
      <p><strong>Adresse :</strong> ${adresse || 'Non fournie'}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <h3>📦 Produits commandés :</h3>
      ${productListHtml}
      <p><strong>Total :</strong> ${total} €</p>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("❌ Erreur d'envoi email :", err);
    } else {
      console.log('✅ Email envoyé :', info.response);
    }
  });
}

// Endpoint pour recevoir une commande
app.post('/api/send-order', (req, res) => {
  const orderData = req.body;
  console.log("📨 Nouvelle commande reçue :", orderData);

  sendOrderEmail(orderData);

  res.status(200).json({ message: 'Commande reçue et email envoyé.' });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
});
