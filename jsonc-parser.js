/**
 * parse json with comments files
 * @param {String} file
 * @returns { Object } JSON object
 */
function parse(file) {
  const fs = require('fs');
  let data = fs.readFileSync(file, { encoding:'utf8' });
  let lines = data.replace(/(\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$)/gm, '');
  return JSON.parse(lines);
}

module.exports = {
	parse
}