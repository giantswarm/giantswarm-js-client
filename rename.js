const path = require("path");
const fs = require("fs").promises;

async function walk(p) {
  const files = [];

  let stats = {};
  let filePath = "";
  let typesFolder = [];

  const getStats = async somePath => {
    stats = await fs.stat(somePath);

    if (stats.isDirectory()) {
      typesFolder = await fs.readdir(somePath);
      for (const file of typesFolder) {
        filePath = path.join(somePath, file);
        await getStats(filePath);
      }
    } else {
      files.push(somePath);
    }
  };

  await getStats(p);

  return files;
}

function getReplacement(className) {
  return `static constructFromObject(data: Partial<${className}>, obj: ${className}): ${className};`;
}

function getSearchString() {
  return "static constructFromObject(data: any, obj: any): any;";
}

async function main() {
  try {
    const files = await walk(path.resolve("@types"));
    let fileName = "";

    for (const file of files) {
      const fileData = await fs.readFile(file, "utf-8");
      fileName = path.basename(file, ".d.ts");
      const newFileData = fileData.replace(
        getSearchString(),
        getReplacement(fileName)
      );

      if (fileData !== newFileData) {
        await fs.writeFile(file, newFileData, "utf-8");
      }
    }
  } catch (err) {
    console.log(err);
  }
}

main();
