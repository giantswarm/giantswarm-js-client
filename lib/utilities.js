var requireAllFilesFromFolder = function(dir) {
  var filesystem = require("fs");
  var results = [];

  filesystem.readdirSync(dir).forEach(function(file) {
    file = dir+'/'+file;
    var stat = filesystem.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFilesFromFolder(file))
    } else results.push(require(file));
  });

  return results;
};

module.exports = {
  requireAllFilesFromFolder: requireAllFilesFromFolder
}