import { CryptoDocument } from "../@types/Crypto";
import { Crypto } from "../models";
import { getArrayBasedOnLRUImplementation } from "../utils/helper";

export class CryptoRepo {
  static LRUArrayLength = 100;

  /**
   *
   * @param name
   * @returns Promise<CryptoDocument[]> - Returns an array of Crypto documents
   *
   * Function to get Crypto Docs based on Name
   */
  static async getCryptoByName(name: string): Promise<CryptoDocument[]> {
    return Crypto.find({ name });
  }

  /**
   *
   * @param name
   * @param price
   * @param marketCap
   * @param change
   *
   * Function to update or create the Crypto Doc
   */
  static async updateOrCreateCrypto(
    name: string,
    price: number,
    marketCap: number,
    change: number
  ) {
    // Fetching the Existing Crypto Instance
    const targetCrypto = await CryptoRepo.getCryptoByName(name);

    // If No Entry found
    if (!targetCrypto.length)
      new Crypto({
        name,
        price: [price],
        marketCap: [marketCap],
        change: [change],
      }).save();
    else {
      // LRU Implementation of the price
      targetCrypto[0].price = getArrayBasedOnLRUImplementation(
        targetCrypto[0].price,
        CryptoRepo.LRUArrayLength,
        price
      );

      // LRU Implementation of the Market Cap
      targetCrypto[0].marketCap = getArrayBasedOnLRUImplementation(
        targetCrypto[0].marketCap,
        CryptoRepo.LRUArrayLength,
        marketCap
      );

      // LRU Implementation of the 24h Change
      targetCrypto[0].change = getArrayBasedOnLRUImplementation(
        targetCrypto[0].change,
        CryptoRepo.LRUArrayLength,
        change
      );

      // Saving the Document
      targetCrypto[0].save();
    }
  }
}
