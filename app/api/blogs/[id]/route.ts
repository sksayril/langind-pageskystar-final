import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const data = await request.json()
    const { id } = params

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { ...data },
      { new: true, runValidators: true }
    )

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(
      { message: 'Blog updated successfully', blog: updatedBlog },
      { status: 200 }
    )
  } catch (error) {
    console.error('Update blog error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const { id } = params

    const deletedBlog = await Blog.findByIdAndDelete(id)

    if (!deletedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(
      { message: 'Blog deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Delete blog error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
