const fs = require('fs');
const path = require('path');

const file = path.resolve('./node_modules/babel-preset-react-app/create.js');
var text = fs.readFileSync(file, 'utf8');

if (!text.includes('babel-plugin-relay')) {
  if (text.includes("require('babel-plugin-macros'),")) {
    text = text.replace(
      "require('babel-plugin-macros'),",
      "require('babel-plugin-macros'),\nrequire('babel-plugin-relay'),",
    );
    fs.writeFileSync(file, text, 'utf8');
  } else {
    throw new Error(`Failed to inject babel-plugin-relay.`);
  }
}
