import { NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/skystar-admin'

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

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)

export async function GET(request: NextRequest) {
  try {
    console.log('API: Checking admin...')
    console.log('API: MONGODB_URI:', MONGODB_URI)
    
    // Connect to MongoDB directly
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI)
    }
    console.log('API: Database connected')

    const admin = await (Admin as any).findOne({ email: 'sksayril123@gmail.com' })
    console.log('API: Admin found:', admin ? 'Yes' : 'No')
    
    if (!admin) {
      console.log('API: No admin found')
      return NextResponse.json(
        { error: 'Admin user not found', debug: 'No admin found in database' },
        { status: 404 }
      )
    }

    console.log('API: Admin details:', {
      email: admin.email,
      hasPassword: !!admin.password,
      createdAt: admin.createdAt
    })

    return NextResponse.json(
      { 
        message: 'Admin user exists',
        admin: { 
          email: admin.email, 
          createdAt: admin.createdAt,
          hasPassword: !!admin.password
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('API: Check admin error:', error)
    return NextResponse.json(
      { error: 'Internal server error', debug: error.message },
      { status: 500 }
    )
  }
}
