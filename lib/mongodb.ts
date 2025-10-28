import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://cripcocode:sksayril123@45.129.86.243:27017/skystarconact?authSource=admin'

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

declare global {
  var mongoose: any
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  console.log('Connecting to MongoDB:', MONGODB_URI)
  
  if (cached.conn) {
    console.log('Using cached connection')
    return cached.conn
  }

  if (!cached.promise) {
    console.log('Creating new connection')
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully')
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    console.log('Connection established')
  } catch (e) {
    console.error('MongoDB connection error:', e)
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default connectDB
