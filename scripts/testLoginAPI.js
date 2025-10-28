const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

async function testLogin() {
  try {
    console.log('Testing login API...')
    
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'sksayril123@gmail.com',
        password: 'sksayril123@'
      })
    })

    const data = await response.json()
    console.log('Response status:', response.status)
    console.log('Response data:', data)
    
    if (response.ok) {
      console.log('✅ Login successful!')
    } else {
      console.log('❌ Login failed:', data.error)
    }
  } catch (error) {
    console.error('Error testing login:', error.message)
  }
}

testLogin()
