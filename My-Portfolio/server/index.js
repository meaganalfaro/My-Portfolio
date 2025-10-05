// server/index.js
require('dotenv').config();                 // loads RESEND_API_KEY, etc. from .env
const express = require('express');
const helmet = require('helmet');           // security headers
const cors = require('cors');               // allow frontend to call this API
const rateLimit = require('express-rate-limit'); // basic anti-spam
const { Resend } = require('resend');       // Resend SDK

const app = express();
app.use(helmet());
app.use(express.json());

// allow calls from your dev and prod sites (adjust if needed)
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://malfaro.com']
}));

const resend = new Resend(process.env.RESEND_API_KEY);

// escape helper so user text is safe inside HTML email
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (ch) =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])
);

// POST /api/contact — your form will send requests here
app.post(
  '/api/contact',
  rateLimit({ windowMs: 60 * 1000, max: 5 }),         
  async (req, res) => {
    const { name, email, message, company } = req.body || {};

    // honeypot: bots fill hidden fields; real users don’t
    if (company) return res.status(204).end();

    // simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: `Portfolio Contact <${process.env.RESEND_FROM}>`, 
        to: [process.env.CONTACT_TO],                           
        replyTo: email,                                         
        subject: `New contact from ${name}`,
        html: `
          <h2>New contact</h2>
          <p><b>Name:</b> ${esc(name)}</p>
          <p><b>Email:</b> ${esc(email)}</p>
          <p><b>Message:</b></p>
          <pre style="white-space:pre-wrap">${esc(message)}</pre>
        `,
      });

      if (error) throw error;
      res.json({ ok: true, id: data?.id });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Email failed' });
    }
  }
);

app.listen(4000, () => console.log('Contact API listening on :4000'));
