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

async function createAdmin() {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/skystar-admin'
    console.log('Connecting to:', MONGODB_URI)
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
    
    const email = 'sksayril123@gmail.com'
    const password = 'sksayril123@'
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) {
      console.log('Admin user already exists')
      await mongoose.disconnect()
      return
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)
    
    // Create admin
    const admin = new Admin({
      email,
      password: hashedPassword,
    })
    
    await admin.save()
    console.log('Admin user created successfully!')
    console.log('Email:', email)
    console.log('Password:', password)
    
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error creating admin:', error)
    await mongoose.disconnect()
  }
}

createAdmin()
