async function getOg(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const text = await res.text();
    const og = text.match(/<meta property=["']og:image["'] content=["'](.*?)["']/i);
    const images = Array.from(text.matchAll(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi)).map(m => m[0]);
    console.log('\n--- URL:', url);
    console.log('OG Image:', og ? og[1] : 'none');
    const ya = images.filter(img => /alliance/i.test(img));
    console.log('Alliance matches:', ya);
    const uploads = [...new Set(images.filter(img => /wp-content\/uploads/i.test(img)))];
    console.log('Sample uploads:', uploads.slice(0, 5));
  } catch (e) {
    console.error(url, e.message);
  }
}

async function main() {
  await getOg('https://aadiyogaschool.com/courses/100-hour-yoga-teacher-training-course-in-rishikesh-india');
  await getOg('https://aadiyogaschool.com/courses/200-hour-yoga-teacher-training-course');
  await getOg('https://aadiyogaschool.com/courses/residential-300-hour-yoga-teacher-training-course');
  await getOg('https://aadiyogaschool.com/courses/one-week-yoga-retreat-india');
  await getOg('https://aadiyogaschool.com/');
}

main();
