import { Request, Response } from "express";
import { COINS_IDS, failureLabel } from "../constants";
import { CryptoRepo } from "../repository";
import { getStandardDeviationOfAnArray } from "../utils/helper";

export class CryptoController {
  /**
   * Handles the GET request for cryptocurrency stats.
   *
   * @static
   * @async
   * @param {Request} req - The request object, which contains query parameters.
   * @param {Response} res - The response object used to send back the desired HTTP response.
   *
   * @returns {Promise<Response>} A Promise that resolves to the response object containing:
   *  - If successful (status code 200):
   *    - `price` (number): The latest price of the requested cryptocurrency.
   *    - `marketCap` (number): The latest market capitalization of the requested cryptocurrency.
   *    - `24hChange` (number): The 24-hour price change of the requested cryptocurrency.

   *  - If the coin type is invalid (status code 400):
   *    - `status` (string): A label indicating failure.
   *    - `message` (string): An error message indicating the invalid coin type.

   *  - If an internal server error occurs (status code 500):
   *    - `status` (string): A label indicating failure.
   *    - `message` (string): An error message indicating an internal server error.
   *
   * @throws {Error} Throws an error if the request processing fails.
   */

  static async handleGetStats(req: Request, res: Response) {
    // Getting the Query Params from the route
    const coinName = req.query.coin as string;

    // Invalid Coin Type
    if (COINS_IDS.indexOf(coinName) == -1)
      return res
        .status(400)
        .json({ status: failureLabel, message: "Invalid Coin Type" });

    try {
      const targetCrypto = await CryptoRepo.getCryptoByName(coinName);
      return res.status(200).json({
        price: targetCrypto[0].price.slice(-1)[0],
        marketCap: targetCrypto[0].marketCap.slice(-1)[0],
        "24hChange": targetCrypto[0].change.slice(-1)[0],
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: failureLabel, message: "Internal Server Error" });
    }
  }

  /**
   * Handles the GET request for calculating the price deviation of a cryptocurrency.
   *
   * @static
   * @async
   * @param {Request} req - The request object, which contains query parameters.
   * @param {Response} res - The response object used to send back the desired HTTP response.
   *
   * @returns {Promise<Response>} A Promise that resolves to the response object containing:
   *  - If successful (status code 200):
   *    - `deviation` (number): The standard deviation of the price of the requested cryptocurrency.
   *  - If the coin type is invalid (status code 400):
   *    - `status` (string): A label indicating failure.
   *    - `message` (string): An error message indicating the invalid coin type.
   *  - If an internal server error occurs (status code 500):
   *    - `status` (string): A label indicating failure.
   *    - `message` (string): An error message indicating an internal server error.
   *
   * @throws {Error} Throws an error if the request processing fails or if the coin type is invalid.
   */

  static async handleGetPriceDeviation(req: Request, res: Response) {
    // Getting the Query Params from the route
    const coinName = req.query.coin as string;

    // Invalid Coin Type
    if (COINS_IDS.indexOf(coinName) == -1)
      return res
        .status(400)
        .json({ status: failureLabel, message: "Invalid Coin Type" });

    try {
      const targetCrypto = await CryptoRepo.getCryptoByName(coinName);
      return res.status(200).json({
        deviation: getStandardDeviationOfAnArray(targetCrypto[0].price, 2),
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: failureLabel, message: "Internal Server Error" });
    }
  }
}
