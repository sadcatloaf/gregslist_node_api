import { Schema } from "mongoose";

export const CarSchema = new Schema(
  {
    make: { type: String, minLength: 3, maxLength: 50, required: true },
    model: { type: String, minLength: 1, maxLength: 100, required: true },
    year: { type: Number, min: 1886, max: 2025, required: true },
    price: { type: Number, min: 0, max: 1000000, required: true },
    imgUrl: { type: String, maxLength: 500, required: true },
    description: { type: String, maxLength: 500 },
    // ENUM denotes that the engineType must be one of the strings in the enum array
    engineType: { type: String, enum: ['V6', 'V8', 'V10', '4-Cylinder', 'unknown'], required: true },
    color: { type: String, maxLength: 50, required: true },
    // tags is an array of strings ['convertible', 'rear wheel drive', 'manual transmission]
    tags: { type: [String], required: true },
    mileage: { type: Number, min: 0, max: 1000000, required: true, default: 0 },
    hasCleanTitle: { type: Boolean, required: true, default: true },
    // object id must look something like 6615af31b500d41de2bfbe28
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true
  }
)