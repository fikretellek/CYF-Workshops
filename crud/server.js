const express = require("express");
const fs = require("fs").promises;
const app = express();

const readFile = (req, res, next) => {
  fs.readFile("./albums.json").then((data) => {
    console.log(data.toString()); // Log the data
    req.albumsData = JSON.parse(data); // Parse the JSON and attach it to the request object
    next();
  });
};

app.use(readFile);
app.use(express.json());

app.get("/albums", (req, res) => {
  res.json(req.albumsData);
});

app.get("/albums/:albumId", (req, res) => {
  const reqAlbumId = req.params.albumId;

  const reqAlbum = req.albumsData.find((album) => album.albumId === reqAlbumId);

  res.send(reqAlbum);
});

app.post("/albums", (req, res) => {
  const newAlbum = req.body;

  req.albumsData.push(newAlbum);

  fs.writeFile("./albums.json", JSON.stringify(req.albumsData));

  res.send(req.albumsData);
});

app.delete("/albums/:albumId", (req, res) => {
  const delAlbumId = req.params.albumId;

  const delAlbum = req.albumsData.find((album) => album.albumId === delAlbumId);
  req.albumsData.splice(req.albumsData.indexOf(delAlbum), 1);

  fs.writeFile("./albums.json", JSON.stringify(req.albumsData));

  res.send(req.albumsData);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
