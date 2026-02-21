import qr, { image } from "qr-image";
import fs from "fs";
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';

//express
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // or current folder if saving in root

// 1. Use the inquirer npm package to get user input.

// Use user feedback for... whatever!!

//exprss code

app.post("/generate", (req, res) => {
const frontendUrl = req.body.url;

  if (!frontendUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  const qr_svg = qr.image(frontendUrl, { type: "svg" });

  res.type("svg");
  qr_svg.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get("/download/")
