const fs = require("fs").promises;

async function main() {
  const typesFolder = await fs.readdir("@types");
  console.log(typesFolder);
}

main();
