/**
 * parse json with comments files
 * @param {String} file
 * @param {(lines) => any} p JSON Parser
 * @returns { Object } JSON object
 */
function parser(file, p=JSON.parse) {
  const fs = require('fs');
  let data = fs.readFileSync(file, { encoding:'utf8' });
  let lines = data.replace(/(\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$)/gm, '');
  return p(lines);
}

module.exports = {
	parse:parser
}