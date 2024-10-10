import axios from "axios";
import { COINS_API_BASE_URL, COINS_IDS } from "../constants";
import { CryptoRepo } from "../repository";

/**
 *
 * @param coinId
 * @returns {{price: number, marketCap: number, "24hChange": number}}
 *
 * Function to handle the API Call
 */
export const getCoinData = async (coinId: string) => {
  const data = await (await axios.get(`${COINS_API_BASE_URL}/${coinId}`)).data;
  return {
    price: data.market_data.current_price.usd,
    marketCap: data.market_data.market_cap.usd,
    "24hChange": data.market_data.price_change_24h,
  };
};

/**
 * Function that will be called from the scheduler
 */
export const scrapeDataFromAPI = async () => {
  let data = null;

  for (let coinId of COINS_IDS) {
    // Handling the API Error
    try {
      data = await getCoinData(coinId);
      CryptoRepo.updateOrCreateCrypto(
        coinId,
        data.price,
        data.marketCap,
        data["24hChange"]
      );
    } catch (error) {
      console.error("Error in API Call");
    }
  }
};
