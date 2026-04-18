import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDB from '@/lib/mongodb'
import Admin from '@/models/Admin'

export async function POST(request: NextRequest) {
  try {
    const { email, password, confirmPassword } = await request.json()

    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    await connectDB()

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: email.toLowerCase() })
    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists with this email' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create new admin
    const newAdmin = new Admin({
      email: email.toLowerCase(),
      password: hashedPassword,
    })

    await newAdmin.save()

    return NextResponse.json(
      { message: 'Admin created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
