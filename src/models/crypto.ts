import { model, Schema } from "mongoose";
import { CryptoDocument } from "../@types/Crypto";

const cryptoSchema = new Schema<CryptoDocument>(
  {
    name: { type: String, required: true },
    price: { type: [Number], required: true },
    marketCap: { type: [Number], required: true },
    change: { type: [Number], required: true },
  },
  { timestamps: true }
);

export const Crypto = model("Crypto", cryptoSchema);
