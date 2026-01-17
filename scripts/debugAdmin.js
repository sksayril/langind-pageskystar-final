require('dotenv').config({ path: '.env.local' })

console.log('Environment Variables:')
console.log('MONGODB_URI:', process.env.MONGODB_URI || 'mongodb://localhost:27017/skystar-admin')
console.log('JWT_SECRET:', process.env.JWT_SECRET || 'your-secret-key')
console.log('NODE_ENV:', process.env.NODE_ENV || 'development')

const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

// Admin Schema
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

const Admin = mongoose.model('Admin', AdminSchema)

async function debugAdmin() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://globespotmlm:globespotmlm@cluster0.qwwrkho.mongodb.net/skystar'
    console.log('Connecting to:', MONGODB_URI)
    
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB')
    
    const admin = await Admin.findOne({ email: 'sksayril123@gmail.com' })
    console.log('Admin found:', admin ? 'Yes' : 'No')
    
    if (admin) {
      console.log('Admin details:')
      console.log('- Email:', admin.email)
      console.log('- Password hash length:', admin.password.length)
      console.log('- Created at:', admin.createdAt)
      
      // Test password
      const testPassword = 'sksayril123@'
      const isValid = await bcrypt.compare(testPassword, admin.password)
      console.log('Password test result:', isValid ? '✅ Valid' : '❌ Invalid')
      
      // Test with different password formats
      const testPasswords = [
        'sksayril123@',
        'sksayril123',
        'sksayril123@ ',
        ' sksayril123@'
      ]
      
      for (const pwd of testPasswords) {
        const result = await bcrypt.compare(pwd, admin.password)
        console.log(`Password "${pwd}": ${result ? '✅' : '❌'}`)
      }
    }
    
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error:', error)
    await mongoose.disconnect()
  }
}

debugAdmin()
