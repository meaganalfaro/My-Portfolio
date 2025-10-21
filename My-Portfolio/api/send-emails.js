import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    const { name, email, message } = req.body || {};
    const data = await resend.emails.send({
      from: 'Meagan <hello@malfaro.com>', 
      to: ['meaganalfaro1@gmail.com'],            
      subject: `New message from ${name}`,
      reply_to: email,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`
    });
    res.status(200).json({ ok: true, id: data.id });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
}
