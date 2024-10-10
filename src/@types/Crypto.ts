import { Document } from "mongoose";

export interface CryptoDocument extends Document {
  name: string;
  price: number[];
  marketCap: number[];
  change: number[];
  createdAt?: Date;
  updatedAt?: Date;
}
