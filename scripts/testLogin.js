require('dotenv').config({ path: '.env' })

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

async function testLogin() {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/skystar-admin'
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
    
    const email = 'sksayril123@gmail.com'
    const password = 'sksayril123@'
    
    // Find admin
    const admin = await Admin.findOne({ email })
    if (!admin) {
      console.log('Admin user not found!')
      await mongoose.disconnect()
      return
    }
    
    console.log('Admin user found:', admin.email)
    
    // Test password
    const isValidPassword = await bcrypt.compare(password, admin.password)
    if (isValidPassword) {
      console.log('✅ Password is correct!')
      console.log('✅ Login should work with these credentials:')
      console.log('   Email:', email)
      console.log('   Password:', password)
    } else {
      console.log('❌ Password is incorrect!')
    }
    
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error testing login:', error)
    await mongoose.disconnect()
  }
}

testLogin()
