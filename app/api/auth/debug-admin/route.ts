import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Admin from '@/models/Admin'

export async function GET(request: NextRequest) {
  try {
    console.log('Starting admin check...')
    await connectDB()
    console.log('Database connected')

    const admin = await Admin.findOne({ email: 'sksayril123@gmail.com' })
    console.log('Admin query result:', admin)

    if (!admin) {
      console.log('No admin found')
      return NextResponse.json(
        { error: 'Admin user not found', debug: 'No admin found in database' },
        { status: 404 }
      )
    }

    console.log('Admin found:', {
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
    console.error('Check admin error:', error)
    return NextResponse.json(
      { error: 'Internal server error', debug: error.message },
      { status: 500 }
    )
  }
}
