import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  content: {
    type: String, // Rich text content (HTML or Markdown)
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String, // URL to image
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  author: {
    name: { type: String, default: 'Skystar Team' },
    avatar: { type: String, default: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  },
  readTime: {
    type: String,
    default: '5 min read',
  },
  
  // SEO Fields
  metaTitle: String,
  metaDescription: String,
  focusKeyword: String,
  imageAltText: String,
  canonicalUrl: String,
  ogImage: String,
  
  // Settings
  isPublished: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Update the updatedAt field on save
BlogSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
