import { Schema } from "mongoose";

export const HouseSchema = new Schema(
    {
        bedrooms: { type: Number, min: 0, max: 30, required: true },
        bathrooms: { type: Number, min: 0, max: 25, required: true },
        levels: { type: Number, min: 1, max: 4, required: true },
        price: { type: Number, min: 0, max: 1000000, required: true },
        imgUrl: { type: String, minLength: 0, maxLength: 500, required: true },
        description: { type: String, minLength: 0, maxLength: 500, required: true },
        year: { type: Number, min: 1000, max: 2024, required: true },
        creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

// CarSchema.virtual('creator', {
//     localField: 'creatorId', // take this value from my schema
//     ref: 'Account', // look through this collection
//     foreignField: '_id', // match my localField to this value from the referenced collection
//     justOne: true // return a single object
//   })