import jsf from "jsonfile";
//import rates from "./../data/t590";
import rates from "./../data/out-t590.json";
// test data: import rates from './../data/t590test'

import {
  simple_de,
  simple_fr,
  simple_it // ,
  // filter_de,
  // filter_fr,
  // filter_it
} from "./utils/filter";
import { rateKeys, fromDir, replaceInFiles } from "./utils/common";

const main = () => {
  console.log("Transform Rates");
  console.log("Rates Input length: " + rates.length);

  const resDe = simple_de(rates);
  console.log("Result DE length: " + resDe.length);
  writeFile(resDe, "rates", "de");
  //writeFile(filter_de(rates), "tarif", "de")
  writeFile(rateKeys(resDe), "rate-keys", "de");

  const resFr = simple_fr(rates);
  console.log("Result FR length: " + resFr.length);
  writeFile(resFr, "rates", "fr");
  //writeFile(filter_fr(rates), "tarif", "fr")
  writeFile(rateKeys(resFr), "rate-keys", "fr");

  const resIt = simple_it(rates);
  console.log("Result IT length: " + resIt.length);
  writeFile(resIt, "rates", "it");
  //writeFile(filter_it(rates), "tariffa", "it")
  writeFile(rateKeys(resIt), "rate-keys", "it");

  // does not work with json2js
  // writeFile(oneFile(rates), "rates", "all")

  json2js();
};

const DATADIR = "./out/data/";

const writeFile = (jsonobj, fname, locale) => {
  const fn = DATADIR + fname + "-" + locale + ".json";
  jsf.writeFile(fn, jsonobj, { spaces: 2 }, err => {
    if (err) console.error("writeFile", err);
  });
};

const json2js = () => {
  // Datastructure:
  /* [ [ 'utils/data/rate-keys-de.json',
    'utils/data/rate-keys-de.js',
    'ratekeysde' ]
  ] */
  const filelist = fromDir(DATADIR, ".json");
  const newfn = filelist.map(f => [
    f,
    f.replace(".json", ".js"),
    f
      .split("/")[2] // split by dir, take filename
      .replace(".json", "")
      .replace(/-/g, "") // replace all with global regex modifier
  ]);
  console.log(newfn);
  var rx1 = /\[([^\]]+)]/;
  var rx2 = /\(([^)]+)\)/;
  var rx3 = /{([^}]+)}/;
  var rx = /\[/;
  for (var file of newfn) {
    replaceInFiles(file[0], file[1], rx, `export const ${file[2]} = [`);
  }
};

const oneFile = rates => {
  return {
    de: simple_de(rates),
    fr: simple_fr(rates),
    it: simple_it(rates)
  };
};
const writeFs = (obj, path) => {
  fs.writeFile(path, obj, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Saved: " + path);
  });
};

main();
