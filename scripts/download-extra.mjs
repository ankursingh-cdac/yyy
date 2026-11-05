import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const extraAssets = [
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/01/Yoga-Alliance-USA.jpg',
    dest: 'public/images/brand/yoga-alliance-usa.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-14-at-9.41.25-AM.jpeg',
    dest: 'public/images/courses/100-hour-yttc.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-14-at-9.41.23-AM.jpeg',
    dest: 'public/images/courses/200-hour-yttc.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-14-at-9.41.24-AM.jpeg',
    dest: 'public/images/courses/300-hour-yttc.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-18-at-11.53.20-AM.jpeg',
    dest: 'public/images/courses/yoga-retreat.jpg',
  },
];

const downloadFile = (fileUrl, destPath) => {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(process.cwd(), destPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    const client = fileUrl.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        Referer: 'https://aadiyogaschool.com/',
      },
    };

    const request = client.get(fileUrl, options, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        let redirectUrl = response.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, fileUrl).toString();
        }
        return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        return reject(
          new Error(`Failed to download ${fileUrl}: Status Code ${response.statusCode}`)
        );
      }

      const fileStream = fs.createWriteStream(fullPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        const stat = fs.statSync(fullPath);
        resolve({ destPath, size: stat.size });
      });

      fileStream.on('error', (err) => {
        fs.unlink(fullPath, () => {});
        reject(err);
      });
    });

    request.on('error', (err) => {
      reject(err);
    });

    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${fileUrl}`));
    });
  });
};

async function main() {
  console.log(`Downloading ${extraAssets.length} remaining verified assets...`);
  const manifestPath = path.resolve(process.cwd(), 'public/images/image-manifest.json');
  let manifest = [];
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  }

  for (const asset of extraAssets) {
    try {
      console.log(`Downloading: ${asset.url} -> ${asset.dest}`);
      const res = await downloadFile(asset.url, asset.dest);
      manifest = manifest.filter(m => m.localFile !== asset.dest);
      manifest.push({
        name: path.basename(asset.dest),
        path: '/' + asset.dest.replace(/^public\//, '').replace(/\\/g, '/'),
        localFile: asset.dest,
        originalUrl: asset.url,
        size: res.size,
      });
      console.log(`Success: ${asset.dest} (${res.size} bytes)`);
    } catch (err) {
      console.error(`ERROR downloading ${asset.url}:`, err.message);
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`Updated manifest written with total ${manifest.length} verified assets!`);
}

main();
