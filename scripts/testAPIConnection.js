require('dotenv').config({ path: '.env.local' })

const mongoose = require('mongoose')

async function testAPIConnection() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://cripcocode:sksayril123@45.129.86.243:27017/skystarconact?authSource=admin'
    console.log('Testing API connection to:', MONGODB_URI)
    
    // Test the exact same connection as API
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI)
    }
    console.log('✅ Connected to MongoDB')
    console.log('Current database:', mongoose.connection.db.databaseName)
    
    // Admin Schema (same as API)
    const AdminSchema = new mongoose.Schema({
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    })
    
    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
    
    // Test the exact same query as API
    const email = 'sksayril123@gmail.com'
    console.log('Searching for email:', email.toLowerCase())
    
    const admin = await Admin.findOne({ email: email.toLowerCase() })
    console.log('Admin found:', admin ? 'Yes' : 'No')
    
    if (admin) {
      console.log('Admin details:')
      console.log('- Email:', admin.email)
      console.log('- Created:', admin.createdAt)
      console.log('- Has password:', !!admin.password)
      
      // Test password
      const bcrypt = require('bcryptjs')
      const password = 'sksayril123@'
      const isValid = await bcrypt.compare(password, admin.password)
      console.log('Password test:', isValid ? '✅ Valid' : '❌ Invalid')
    } else {
      console.log('❌ No admin found!')
      
      // Let's check what's in the collection
      const allAdmins = await Admin.find({})
      console.log('All admins in collection:', allAdmins.length)
      allAdmins.forEach(a => {
        console.log(`- ${a.email} (created: ${a.createdAt})`)
      })
    }
    
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error:', error)
    await mongoose.disconnect()
  }
}

testAPIConnection()
