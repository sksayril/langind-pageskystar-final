import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'

// GET all blogs
export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const publishedOnly = searchParams.get('published') === 'true'
    
    let query = {}
    if (publishedOnly) {
      query = { isPublished: true }
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 })
    
    return NextResponse.json({ blogs }, { status: 200 })
  } catch (error) {
    console.error('Fetch blogs error:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

// POST create new blog
export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const data = await request.json()

    if (!data.title || !data.slug || !data.content) {
      return NextResponse.json(
        { error: 'Title, Slug, and Content are required' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug: data.slug.toLowerCase() })
    if (existingBlog) {
      return NextResponse.json(
        { error: 'A blog with this slug already exists' },
        { status: 400 }
      )
    }

    const newBlog = new Blog({
      ...data,
      slug: data.slug.toLowerCase(),
    })

    await newBlog.save()

    return NextResponse.json(
      { message: 'Blog created successfully', blog: newBlog },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create blog error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
