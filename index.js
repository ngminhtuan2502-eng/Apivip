const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// API taixiu
app.get("/api/taixiu", async (req, res) => {
  try {
    const r = await axios.get("http://36.50.55.230:5769/api/taixiu");
    res.json(r.data);
  } catch (e) {
    res.status(500).json({ error: "Lỗi API taixiu" });
  }
});

// API taixiumd5
app.get("/api/taixiumd5", async (req, res) => {
  try {
    const r = await axios.get("http://36.50.55.230:5769/api/taixiumd5");
    res.json(r.data);
  } catch (e) {
    res.status(500).json({ error: "Lỗi API taixiumd5" });
  }
});

app.listen(PORT, () => {
  console.log("Server chạy cổng " + PORT);
});
