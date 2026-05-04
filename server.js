const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/metrics") {
    res.end("cpu: 10, memory: 50");
    return;
  }

  res.end("Hello from beginner project 🚀");
}).listen(3000);
