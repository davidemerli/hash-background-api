const GeoPattern = require("geopattern");
const express = require("express");

const app = express();
const router = express.Router();

const PORT = process.env.PORT;

router.get("/:string", (req, res) => {
  const pattern = GeoPattern.generate(req.params.string);
  const img = pattern.toSvg();

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Content-Length", img.length);
  res.send(img);
  res.status(200);
});

app.use(router);

app.listen(PORT, () => console.log(`Background API listening on ${PORT}`));
