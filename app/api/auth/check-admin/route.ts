import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Admin from '@/models/Admin'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const admin = await Admin.findOne({ email: 'sksayril123@gmail.com' }).select('-password')
    
    if (!admin) {
      return NextResponse.json(
        { error: 'Admin user not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Admin user exists',
        admin: { 
          email: admin.email, 
          createdAt: admin.createdAt 
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Check admin error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
