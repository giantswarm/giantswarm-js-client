const fs = require("fs");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const CodeGen = require("swagger-js-codegen").CodeGen;
const $RefParser = require("@apidevtools/json-schema-ref-parser");

const files = [
  "spec.yaml",
  "responses.yaml",
  "parameters.yaml",
  "definitions.yaml"
];

function log(stdout, stderr) {
  if (stdout) {
    console.log(stdout);
  }

  if (stderr) {
    console.log(stderr);
  }
}

async function main() {
  const parsed = await Promise.all(
    files.map(file => {
      return $RefParser.dereference(path.join(__dirname, "api-spec", file));
    })
  );

  const swagger = parsed.reduce((acc, curr) => {
    return Object.assign({}, acc, curr);
  }, {});

  const tsSourceCode = CodeGen.getTypescriptCode({
    className: "GiantSwarm",
    swagger
  });

  fs.writeFileSync(path.join("dist", "index.ts"), tsSourceCode);

  try {
    const { stdout, stderr } = await exec("./node_modules/.bin/tsc");

    log(stdout, stderr);

    if (!stderr && !stdout) {
      console.log(
        'Building executed successfully! Check "./dist/" for the output.'
      );
    }
  } catch (err) {
    log(err.stdout, err.stderr);

    process.exit(0);
  }
}

main();
