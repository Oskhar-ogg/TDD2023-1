const path = require('path');

module.exports = {
  resolver: {
    // Configure custom module resolution here
    extraNodeModules: {
      // Example mapping of a module name to a specific path
      'my-module': path.resolve(__dirname, 'path/to/my-module'),
    },
  },
};
