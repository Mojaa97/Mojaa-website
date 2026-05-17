import { Resend } from 'resend'

const resend = new Resend('re_8xZQdw11_BnXuc2tRDKRkMHoLLkXtS2AQ')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, mobile, email, service, message } = req.body

  if (!name || !mobile || !email || !service) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'MOJAA Website <onboarding@resend.dev>',
      to: 'mayank@mojaa.in',
      subject: 'New Inquiry - MOJAA Website',
      html: `
        <h2>New Inquiry from MOJAA Website</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="font-weight:bold;width:140px">Name</td><td>${name}</td></tr>
          <tr><td style="font-weight:bold">Mobile</td><td>${mobile}</td></tr>
          <tr><td style="font-weight:bold">Email</td><td>${email}</td></tr>
          <tr><td style="font-weight:bold">Service</td><td>${service}</td></tr>
          <tr><td style="font-weight:bold;vertical-align:top">Message</td><td>${message || '—'}</td></tr>
        </table>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
