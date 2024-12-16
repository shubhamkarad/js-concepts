const cluster = require("node:cluster");
const express = require("express");
const os = require("os");

const totalCPUs = os.cpus().length;

console.log(totalCPUs, "Total CPUs");

if (cluster.isPrimary) {
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = 8000;

  app.get("/", (req, res) => {
    return res.json({ message: `Hello from Express Server ${process.pid}` });
  });

  app.listen(PORT, () => console.log(`Server Started ata port: ${PORT}`));
}
