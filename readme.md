# void-jsonc
Standalone Javascript JSONC/CSON parser.
## how does it work?
void-jsonc remove comments from the jsonc data and use a json parser to turn it into a JSON Object.  
void-jsonc does not let you write jsonc files.
## how to use it?
```js
// or const { parse } = require('void-jsonc');
const JSONC = require('void-jsonc');

JSONC.parse('path/to/test.jsonc');
```
## can i use a different json parser?
absolutely! you can make this use any parser
```js
// either have a function like this or use the parser directly
let parser = (jsonString) => {
    return MyParser(jsonString)
}
// use `JSON.parse` by default
JSONC.parse('path/to/test.jsonc');
// use a custom function to parse json
JSONC.parse('path/to/test.jsonc', parser);
// use your parser directly
JSONC.parse('path/to/test.jsonc', MyParser);
```