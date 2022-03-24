import { Schema, Document, model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface IAdmin extends Document {
    _id: string
    name: string
    email: string
    password: string
    type: string
    created_at: number
}

const adminSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['admin', 'super_admin'],
        default: 'admin'
    },
    created_at: {
        type: Number,
        default: Date.now
    }
})

export default model<IAdmin>('admins', adminSchema)