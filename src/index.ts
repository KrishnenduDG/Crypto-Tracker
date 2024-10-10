import { connect } from "mongoose";
import { app } from "./app";
import { MONGO_DB_URI, PORT } from "./config";
import { SCHEDULER_INTERVAL_IN_MS } from "./constants";
import { scrapeDataFromAPI } from "./jobs/dataScraper";

// Connecting the MongoDB and then connecting the server
connect(MONGO_DB_URI)
  .then(async () => {
    console.log("Database successfully connected!");

    // Init the logic of Data scraping
    await scrapeDataFromAPI();

    // Scheduling the Job
    setInterval(scrapeDataFromAPI, SCHEDULER_INTERVAL_IN_MS);

    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch((error: any) => {
    console.log(error.message);
  });
