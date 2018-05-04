import csv2json from "csv2json";
//var fs = require("fs");
import fs from "fs";

const input = "./data/Tarif_590-sasis-2018.03-normalized.csv";
const out = "./data/out-t590.json";
fs
  .createReadStream(input)
  .pipe(
    csv2json({
      // Defaults to comma.
      separator: ",",
      dynamicTyping: true
    })
  )
  .pipe(fs.createWriteStream(out))
  .on("finish", () => {
    console.log("... Finished");
  });
