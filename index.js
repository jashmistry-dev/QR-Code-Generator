import qr, { image } from "qr-image";
import fs from "fs";
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';

//express
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // or current folder if saving in root

// 1. Use the inquirer npm package to get user input.

// Use user feedback for... whatever!!

//exprss code

app.post("/generate", (req, res) => {
let uniqueId = Date.now();

  const FrontendUrl = req.body.url;
  console.log(FrontendUrl);

  var qr_svg = qr.image(FrontendUrl, { type: "svg" });
  
  qr_svg.pipe(fs.createWriteStream("public/qr-images/"+uniqueId+".svg"));

  var svg_string = qr.imageSync(FrontendUrl, { type: "svg" });

  // e.g. turn every black square into red


  res.json({imageUrl : (uniqueId+".svg")})


  // 3. Create a txt file to save the user input using the native fs node module.
  fs.writeFile("url.txt", FrontendUrl, (err) => {
    {
      if (err) {
        console.log(err);
      } else {
        console.log("done");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});


app.get("/download/")
