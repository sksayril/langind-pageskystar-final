const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

async function testContactSubmission() {
  try {
    console.log('Testing contact form submission...')
    
    const testContact = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      company: 'Test Company',
      service: 'seo',
      budget: '5k-10k',
      timeline: '1-month',
      message: 'This is a test contact form submission to verify the system is working properly.'
    }
    
    const response = await fetch('http://localhost:3000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testContact)
    })

    const data = await response.json()
    console.log('Response status:', response.status)
    console.log('Response data:', data)
    
    if (response.ok) {
      console.log('✅ Contact form submission successful!')
      console.log('Contact ID:', data.id)
    } else {
      console.log('❌ Contact form submission failed:', data.error)
    }
  } catch (error) {
    console.error('Error testing contact submission:', error.message)
  }
}

testContactSubmission()
