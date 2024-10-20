// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("http://environment.data.gov.uk/flood-monitoring/id/floods", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});