const express = require("express");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 8000; // Choose the port you want

// Proxy route to handle requests
app.use("/api", (req, res) => {
  const targetUrl = "https://cravyngteam.herokuapp.com" + req.url;

  // Forward the request to the target API
  req.pipe(request({ url: targetUrl })).pipe(res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
