const http = require("http");
const client = require("prom-client");

// collect default metrics (CPU, memory ya app, etc)
client.collectDefaultMetrics();

const server = http.createServer((req, res) => {

  // metrics endpoint (IMPORTANT)
  if (req.url === "/metrics") {
    res.setHeader("Content-Type", client.register.contentType);
    res.end(client.register.metrics());
    return;
  }

  res.end("Hello from beginner project 🚀");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
