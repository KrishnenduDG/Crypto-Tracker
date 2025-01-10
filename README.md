# Crypto-Tracker

## Author 👨‍💻

- **Krishnendu Dasgupta** - [KrishnenduDG](https://github.com/KrishnenduDG)

## Deployment Details 🚀

The API has been deployed using **Render** web service and is avaiable at https://crypto-tracker-bpgb.onrender.com

## Overview 🌟

**Crypto-Tracker** is a backend application built with **NodeJS**, **Express**, and **MongoDB** that tracks real-time cryptocurrency data, including **Bitcoin**, **Matic**, and **Ethereum**. It periodically fetches data from the **CoinGecko API** and stores it in a database.

## Features 📈

- 🕒 **Background Job**:

  - Fetches cryptocurrency data every `2 hours` and stores it in a database.

- 🔗 **API Endpoints**:

  - Provides an endpoint `/stats` to retrieve the latest data about requested cryptocurrencies.

  - Provides an endpoint `/deviation` to retrieve the Standard Deviation of prices for a given cryptocurrency (upto last 100 records).

## Technologies Used 🛠️

- **NodeJS**
- **Express**
- **MongoDB** (with **Mongoose**)
- **Axios** for API calls
- **TypeScript**
- **CoinGecko API** for crypto stats

## Setup ⚙️

1. Clone the repository:

   ```bash
   git clone git@github.com:KrishnenduDG/Crypto-Tracker.git
   cd crypto-tracker
   ```

1. Install Dependencies:

   ```bash
   pnpm i
   ```

1. Create a `.env` file in the root directory and configure it accorging to `.env.example`

1. Build the project:

   ```bash
   pnpm run build
   ```

1. Start the Server:

   ```bash
   pnpm start
   ```

1. In case of active development scenarios, use

   ```bash
   pnpm run watch:compile
   ```

   This watches for changes and continually updates the `build` folder.
