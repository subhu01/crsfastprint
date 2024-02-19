const fs = require('fs');
const path = require('path');

const htmlFolderPath = path.join(__dirname, 'auth/birthCertificate/view/cert/gpdh');
const files = fs.readdirSync(htmlFolderPath);

files.forEach((file) => {
  if (file.endsWith('.html')) {
    const randomName = Math.random().toString(36).substring(2, 10);
    const oldFilePath = path.join(htmlFolderPath, file);
    const newFilePath = path.join(htmlFolderPath, `${randomName}.html`);

    fs.renameSync(oldFilePath, newFilePath);
  }
});
