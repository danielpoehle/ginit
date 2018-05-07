const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase : () => {
    //path.basename: Extract the filename from a file path

    //The process.cwd() method returns the current working
    //directory of the Node.js process.
    return path.basename(process.cwd());
  },

  directoryExists : (filePath) => {
    //new version, check later if possible
    //return(fs.existsSync(filePath));

    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};
