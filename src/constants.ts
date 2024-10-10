const successLabel = "success";
const failureLabel = "failure";

const COINS_API_BASE_URL = "https://api.coingecko.com/api/v3/coins";
const COINS_IDS = ["bitcoin", "matic-network", "ethereum"];

const SCHEDULER_INTERVAL_IN_MS = 2 * 60 * 60 * 1000;

export {
  COINS_API_BASE_URL,
  COINS_IDS,
  SCHEDULER_INTERVAL_IN_MS,
  failureLabel,
  successLabel,
};
