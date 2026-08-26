export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required' })
  }

  if (!process.env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set')
    return res.status(500).json({ error: 'Newsletter signup is not configured' })
  }

  try {
    const listId = Number(process.env.BREVO_LIST_ID || 5)

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    })

    if (!response.ok && response.status !== 400) {
      const errBody = await response.json().catch(() => ({}))
      console.error('Brevo error:', errBody)
      return res.status(500).json({ error: 'Failed to subscribe' })
    }

    // Brevo returns 400 "Contact already exist" when updateEnabled doesn't apply cleanly; treat as success.
    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}))
      if (errBody.code !== 'duplicate_parameter') {
        console.error('Brevo error:', errBody)
        return res.status(500).json({ error: 'Failed to subscribe' })
      }
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
