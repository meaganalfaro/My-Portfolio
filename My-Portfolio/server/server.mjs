import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { Resend } from 'resend';

const app = express();

// 1) Security + JSON parsing
app.use(helmet());
app.use(express.json());

// 2) Allow your site to call the API (adjust ports if your client runs elsewhere)
app.use(cors({
  origin: ['https://malfaro.com']
}));

// 3) Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Tiny HTML escape helper so user input doesn't become HTML
const esc = (s) => String(s).replace(/[&<>"']/g, ch =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])
);

// 4) The POST endpoint your form will hit
app.post('/api/contact',
  rateLimit({ windowMs: 60_000, max: 5 }), // basic anti-abuse: 5 req/min/IP
  async (req, res) => {
    const { name, email, message, company } = req.body || {};

    // Honeypot: if a hidden "company" field is filled, likely a bot → drop.
    if (company) return res.status(204).end();

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: `Portfolio Contact <${process.env.RESEND_FROM}>`, // must be on your verified domain
        to: [process.env.CONTACT_TO],                            // where YOU receive it
        replyTo: email,                                          // clicking "Reply" goes to the sender
        subject: `New contact from ${name}`,
        html: `
          <h2>New contact</h2>
          <p><b>Name:</b> ${esc(name)}</p>
          <p><b>Email:</b> ${esc(email)}</p>
          <p><b>Message:</b></p>
          <pre style="white-space:pre-wrap">${esc(message)}</pre>
        `
      });

      if (error) throw error;
      res.json({ ok: true, id: data?.id });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Email failed' });
    }
  }
);

// 5) Start the API on port 4000
app.listen(4000, () => console.log('Contact API listening on :4000'));
