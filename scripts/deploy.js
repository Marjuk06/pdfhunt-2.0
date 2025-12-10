import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate version timestamp
const version = Date.now();
console.log(`🚀 Generating deployment version: ${version}`);

// Update index.html
const indexPath = path.join(__dirname, '../index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Update script and style references with version
indexContent = indexContent.replace(
  /src="([^"]+\.jsx?)"/g,
  (match, src) => {
    if (src.includes('?')) {
      return match.replace(/\?v=\d+/, `?v=${version}`);
    }
    return match.replace(src, `${src}?v=${version}`);
  }
);

indexContent = indexContent.replace(
  /href="([^"]+\.css)"/g,
  (match, href) => {
    if (href.includes('?')) {
      return match.replace(/\?v=\d+/, `?v=${version}`);
    }
    return match.replace(href, `${href}?v=${version}`);
  }
);

// Update service worker registration
indexContent = indexContent.replace(
  /register\(['"]\/sw\.js[^'"]*['"]\)/g,
  `register('/sw.js?v=${version}')`
);

fs.writeFileSync(indexPath, indexContent);
console.log('✅ Updated index.html');

// Update service worker cache name
const swPath = path.join(__dirname, '../public/sw.js');
let swContent = fs.readFileSync(swPath, 'utf8');

// Update CACHE_VERSION
swContent = swContent.replace(
  /const CACHE_VERSION = ['"][^'"]+['"]/,
  `const CACHE_VERSION = 'v${version}'`
);

fs.writeFileSync(swPath, swContent);
console.log('✅ Updated sw.js');

console.log(`\n✨ Deployment files updated! Version: ${version}`);
console.log('📦 Ready to build and deploy:\n   npm run build\n   firebase deploy --only hosting\n');

