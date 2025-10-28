import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  service: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: false,
  },
  timeline: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed'],
    default: 'new',
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

ContactSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
