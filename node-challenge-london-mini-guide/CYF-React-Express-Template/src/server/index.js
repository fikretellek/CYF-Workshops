import express from "express";
import stratford from "../../../data/Stratford.json" with { type: "json" };
import harrow from "../../../data/Harrow.json" with { type: "json" };
import heathrow from "../../../data/Heathrow.json" with { type: "json" };

const cities = {stratford, harrow, heathrow}

const app = express();

const routes = {
  "/:city/:category":	"returns :category list for :city"
};

app.get("/", (req, res) => {
  res.status(200).json(routes);
});

app.get("/:city/:category", (req, res) => {
  const city = req.params.city;
  const category = req.params.category
  res.json(cities[city][category]) 
});

app.listen(4173, () => {
  console.log("Listening on http://localhost:4173.");
});
