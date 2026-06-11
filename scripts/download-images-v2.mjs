import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "images");
const videosDir = path.join(process.cwd(), "public", "videos");

for (const dir of [imagesDir, videosDir]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Real photography (no AI-generated imagery) — Unsplash license, free commercial use
const images = [
  // Real call-center / support people
  {
    name: "real-agent-woman-headset.jpg",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=900&fit=crop&q=80",
  },
  {
    name: "real-support-team-office.jpg",
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&h=900&fit=crop&q=80",
  },
  {
    name: "real-woman-office-screen.jpg",
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=900&fit=crop&q=80",
  },
  {
    name: "real-team-collab.jpg",
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=900&fit=crop&q=80",
  },
  {
    name: "real-meeting-discussion.jpg",
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&h=900&fit=crop&q=80",
  },
  {
    name: "real-two-colleagues.jpg",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=900&fit=crop&q=80",
  },
  {
    name: "real-happy-team-laptop.jpg",
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1400&h=900&fit=crop&q=80",
  },
  {
    name: "real-office-workspace.jpg",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
  },
];

// Short looping b-roll (Pexels license, free commercial use)
const videos = [
  {
    name: "support-team-broll.mp4",
    candidates: [
      "https://videos.pexels.com/video-files/7709175/7709175-hd_1920_1080_25fps.mp4",
      "https://videos.pexels.com/video-files/8867263/8867263-hd_1920_1080_25fps.mp4",
      "https://videos.pexels.com/video-files/3249902/3249902-hd_1920_1080_25fps.mp4",
      "https://videos.pexels.com/video-files/5972258/5972258-hd_1920_1080_25fps.mp4",
    ],
  },
];

async function download(url, filePath) {
  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!response.ok) {
      console.log(`  FAIL ${response.status}: ${url}`);
      return false;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 20000) {
      console.log(`  FAIL too small (${buffer.length}b): ${url}`);
      return false;
    }
    fs.writeFileSync(filePath, buffer);
    console.log(`  OK ${path.basename(filePath)} (${Math.round(buffer.length / 1024)} KB)`);
    return true;
  } catch (err) {
    console.log(`  FAIL ${err.message}: ${url}`);
    return false;
  }
}

console.log("Images:");
let ok = 0;
for (const img of images) {
  if (await download(img.url, path.join(imagesDir, img.name))) ok++;
}
console.log(`${ok}/${images.length} images downloaded.\n`);

console.log("Videos:");
for (const vid of videos) {
  for (const url of vid.candidates) {
    if (await download(url, path.join(videosDir, vid.name))) break;
  }
}
