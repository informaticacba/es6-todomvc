var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: here()
  },
  context: here('js')
};

function here(d) {
  return d ? path.join(__dirname, d) : __dirname;
}