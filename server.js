import express from "express";

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://api.guildwars2.com/v2/build");

    res.status(response.status).json({
      status: response.status,
      statusText: response.statusText,
      body: await response.text()
    });
  } catch (err) {
    res.status(500).json({
      error: String(err)
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
