import { Schema, model } from "mongoose";

export interface Verse {
  name: string;
  cookTime: string;
  price: number;
  favorite: boolean;
  origins: string[];
  stars: number;
  imageUrl: string;
  tags: string[];
}

export const VerseSchema = new Schema<Verse>(
  {
    name: { type: String, required: true },
    cookTime: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, default: false },
    origins: { type: [String], required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    tags: { type: [String] },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const VerseModel = model<Verse>("verse", VerseSchema);
