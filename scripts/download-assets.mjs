import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const assets = [
  // Brand
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2017/11/ROUND-STICKER-6-INCH-X-6-INCH.png',
    dest: 'public/images/brand/aadi-yoga-emblem-round.png',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2020/02/cropped-aadi-yoga-logo-1.png',
    dest: 'public/images/brand/aadi-yoga-logo.png',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/01/aadi-yoga-footer.png',
    dest: 'public/images/brand/aadi-yoga-footer-logo.png',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/07/yoga-alliance-usa.png',
    dest: 'public/images/brand/yoga-alliance-usa.png',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/01/cropped-aadi-yoga-logo-192x192.png',
    dest: 'public/images/brand/favicon-192.png',
  },
  // Hero
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2026/07/DSC01631-scaled.jpg',
    dest: 'public/images/hero/himalayas-ganga-hero.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/04/aadi-yoga-school-rishikesh-india-4-1.jpg',
    dest: 'public/images/hero/ashram-ganga-view.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2020/01/RISHIKESH.jpg',
    dest: 'public/images/hero/rishikesh-valley.jpg',
  },
  // Courses
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/100-hour-yoga-teacher-training-in-rishikesh-india.jpg',
    dest: 'public/images/courses/100-hour-yttc.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/200-hour-yoga-teacher-training-in-rishikesh-india.jpg',
    dest: 'public/images/courses/200-hour-yttc.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/300-hour-yoga-teacher-training-in-rishikesh-india.jpg',
    dest: 'public/images/courses/300-hour-yttc.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2019/11/yoga-retreats-in-rishikesh-india.jpg',
    dest: 'public/images/courses/yoga-retreat.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-training/aerial-yoga-training-1.jpg',
    dest: 'public/images/courses/aerial-yoga-ttc.jpg',
  },
  // Faculty / Teachers
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2020/08/about.3.jpg',
    dest: 'public/images/teachers/swami-amarna-anand.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2020/12/deepa-negi.jpg',
    dest: 'public/images/teachers/deepa-negi.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2021/09/prashant-negi.jpg',
    dest: 'public/images/teachers/yogi-prashant-negi.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2020/11/chetan-kumar.jpg',
    dest: 'public/images/teachers/yogi-chetan-kumar.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2020/11/amit-lingwal.jpg',
    dest: 'public/images/teachers/amit-lingwal.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/uploads/2020/08/anant-new.jpg',
    dest: 'public/images/teachers/anant-jethuri.jpg',
  },
  // Shala
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-shala/best-yoga-retreat-rishikesh-india-3.JPG',
    dest: 'public/images/shala/yoga-shala-practice-1.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-shala/best-yoga-retreat-rishikesh-india-4.JPG',
    dest: 'public/images/shala/yoga-shala-practice-2.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-shala/top-yoga-school-rishikesh-india-1.JPG',
    dest: 'public/images/shala/yoga-shala-hall-1.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-shala/top-yoga-school-rishikesh-india-2.JPG',
    dest: 'public/images/shala/yoga-shala-hall-2.jpg',
  },
  // Accommodation
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/accommodation/top-yoga-school-rishikesh-india-4.JPG',
    dest: 'public/images/accommodation/room-twin-1.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/accommodation/K1A3026.JPG',
    dest: 'public/images/accommodation/room-private-1.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/accommodation/K1A3030.JPG',
    dest: 'public/images/accommodation/room-clean-2.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/accommodation/K1A3050.JPG',
    dest: 'public/images/accommodation/room-bed-3.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/accommodation/K1A3066.JPG',
    dest: 'public/images/accommodation/balcony-mountain-view.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/aadi-yoga-property/best-yoga-retreat-rishikesh-india-1.JPG',
    dest: 'public/images/accommodation/property-exterior.jpg',
  },
  // Food & Dining
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/food/salad.jpg',
    dest: 'public/images/food/sattvic-salad.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/food/amool.jpg',
    dest: 'public/images/food/ayurvedic-meal.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/dining-area/DSCN8427.JPG',
    dest: 'public/images/food/dining-hall-1.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/dining-area/IMG_20200217_100040.jpg',
    dest: 'public/images/food/dining-hall-2.jpg',
  },
  // Gallery
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-training/WhatsApp-Image-2019-11-18-at-11.53.20-AM.jpeg',
    dest: 'public/images/gallery/training-group.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-training/yoga-in-rishikesh-india.jpeg',
    dest: 'public/images/gallery/training-asana.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-training/DSCN8375.JPG',
    dest: 'public/images/gallery/training-adjustment.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-training/DSCN8408.JPG',
    dest: 'public/images/gallery/training-lecture.jpg',
  },
  {
    url: 'https://aadiyogaschool.com/wp-content/gallery/yoga-training/WhatsApp-Image-2020-02-17-at-5.32.18-PM.jpg',
    dest: 'public/images/gallery/training-evening-sadhana.jpg',
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
      // Handle redirects
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
  console.log(`Starting download of ${assets.length} original Aadi Yoga assets...`);
  const manifest = [];
  let successful = 0;
  let failed = 0;

  for (const asset of assets) {
    try {
      console.log(`Downloading: ${asset.url} -> ${asset.dest}`);
      const res = await downloadFile(asset.url, asset.dest);
      manifest.push({
        name: path.basename(asset.dest),
        path: '/' + asset.dest.replace(/^public\//, '').replace(/\\/g, '/'),
        localFile: asset.dest,
        originalUrl: asset.url,
        size: res.size,
      });
      successful++;
    } catch (err) {
      console.error(`ERROR downloading ${asset.url}:`, err.message);
      failed++;
    }
  }

  // Save manifest
  const manifestPath = path.resolve(process.cwd(), 'public/images/image-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`\nFinished! Successfully downloaded ${successful}/${assets.length} assets. ${failed} failed.`);
  console.log(`Manifest written to: ${manifestPath}`);
}

main();
