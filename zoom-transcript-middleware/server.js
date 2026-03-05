const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/transcript", async (req, res) => {

  const transcriptUrl = req.query.url;
  const token = req.query.token;

  try {

    const response = await fetch(transcriptUrl, {
      headers: {
        Authorization: "Bearer " + token
      },
      redirect: "follow"
    });

    const transcript = await response.text();

    res.send(transcript);

  } catch (error) {
    res.status(500).send(error.toString());
  }

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});