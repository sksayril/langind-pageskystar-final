import mongoose, { Schema, model, models, Model } from 'mongoose'

export interface IAdmin {
  email: string
  password: string
  createdAt?: Date
}

const AdminSchema = new Schema<IAdmin>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Admin: Model<IAdmin> = models.Admin || model<IAdmin>('Admin', AdminSchema)
export default Admin
