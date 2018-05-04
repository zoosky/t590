export const object2array = (obj) => {
  const key = obj.map((x) => Object.values(x))
  keyArr = key.map((x) => x[4] + " " + x[5])
  return keyArr
}
// transform array of rate objects to arrray of array and extract keys
export function rateKeys(response) {
  const resarr = response.map((x) => Object.values(x))
  const strg = resarr.map((y) => `${y[4]} ${y[5]}`)
  console.log("Keys: ", strg.length)
  return strg
}

import fs from "fs"
import path from "path"

// return all files ending with filter from startpath
export const fromDir = (startPath, filter) => {
  //console.log('Starting from dir '+startPath+'/');
  const result = []
  if (!fs.existsSync(startPath)) {
    console.error("no dir ", startPath)
    return
  }

  var files = fs.readdirSync(startPath)
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i])
    var stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      fromDir(filename, filter) //recurse
    } else if (filename.indexOf(filter) >= 0) {
      result.push(filename)
      //console.log("-- found: ", filename)
    }
  }
  return result
}

export const replaceInFiles = (sourceFile, targetFile, findStringRegex, replacementString) => {
  fs.readFile(sourceFile, "utf8", function(err, data) {
    if (err) {
      return console.log(err)
    }
    var regex = new RegExp(findStringRegex, "gm") // global, multiline
    var result = data.replace(regex, replacementString)

    fs.writeFile(targetFile, result, "utf8", function(err) {
      if (err) return console.log(err)
    })
  })
}
