const fs = require('fs');
const path = require('path');

function cleanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.html')) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/\[cite:[^\]]+\]/g, '');
      fs.writeFileSync(fullPath, content);
    }
  }
}

cleanDir(path.join(__dirname, 'src/assets/data'));
cleanDir(path.join(__dirname, 'src/assets/regulasi'));
console.log('Cleaned');
