const fs = require('fs');

class Upload {
  static saveImageToFile(imageData) {
    const filename = 'profile_picture.jpg';
    fs.writeFileSync(filename, imageData, 'base64');
    return filename;
  }
}

module.exports = Upload;
