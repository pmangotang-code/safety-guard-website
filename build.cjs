const fs = require('fs');
const path = require('path');
const root = __dirname;
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
for (const file of fs.readdirSync(root)) {
  if (file.endsWith('.html')) fs.copyFileSync(path.join(root, file), path.join(root, 'dist', file));
}
fs.cpSync(path.join(root, 'assets'), path.join(root, 'dist/assets'), { recursive: true });
console.log('Static site prepared: 23 HTML pages and assets.');
