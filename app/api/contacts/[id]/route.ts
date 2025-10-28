import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Contact from '@/models/Contact'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json()
    const { id } = params
    
    await connectDB()

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'Contact status updated', contact },
      { status: 200 }
    )
  } catch (error) {
    console.error('Update contact error:', error)
    return NextResponse.json(
      { error: 'Failed to update contact' },
      { status: 500 }
    )
  }
}
