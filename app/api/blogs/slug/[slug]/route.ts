import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()
    const { slug } = params

    const blog = await Blog.findOne({ slug: slug.toLowerCase(), isPublished: true })

    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    return NextResponse.json({ blog }, { status: 200 })
  } catch (error) {
    console.error('Fetch blog by slug error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
