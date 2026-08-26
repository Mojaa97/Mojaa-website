import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, mobile, email, education, location, message, resumeName, resumeContent } = req.body

  if (!name || !mobile || !email || !education || !location) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const attachments = resumeContent && resumeName
      ? [{ filename: resumeName, content: resumeContent }]
      : []

    await resend.emails.send({
      from: 'MOJAA Website <onboarding@resend.dev>',
      to: 'mayank@mojaa.in',
      subject: `New Career Enquiry - ${name}`,
      html: `
        <h2>New Career Enquiry from MOJAA Website</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="font-weight:bold;width:160px">Name</td><td>${name}</td></tr>
          <tr><td style="font-weight:bold">Mobile</td><td>${mobile}</td></tr>
          <tr><td style="font-weight:bold">Email</td><td>${email}</td></tr>
          <tr><td style="font-weight:bold">Education</td><td>${education}</td></tr>
          <tr><td style="font-weight:bold">Current Location</td><td>${location}</td></tr>
          <tr><td style="font-weight:bold;vertical-align:top">Why they want to join</td><td>${message || '—'}</td></tr>
          <tr><td style="font-weight:bold">Resume</td><td>${resumeName ? resumeName : 'Not attached'}</td></tr>
        </table>
      `,
      attachments,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
