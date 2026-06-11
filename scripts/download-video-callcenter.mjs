import fs from "fs";
import path from "path";

const out = path.join(process.cwd(), "public", "videos", "call-center-broll.mp4");

// Call-center b-roll candidates (Pexels), cubicle series first
const ids = [5452721, 5452720, 5452540, 8201408, 7661317, 8865706];
const variants = [
  "hd_1920_1080_25fps", "hd_1920_1080_30fps", "hd_1920_1080_24fps",
  "hd_1366_720_25fps", "hd_1280_720_25fps", "hd_1280_720_30fps",
  "sd_960_540_25fps", "sd_640_360_25fps",
];

async function tryDownload(id, variant) {
  const url = `https://videos.pexels.com/video-files/${id}/${id}-${variant}.mp4`;
  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!response.ok) return false;
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 500000) return false;
    fs.writeFileSync(out, buffer);
    console.log(`OK ${id}-${variant} (${Math.round(buffer.length / 1024 / 1024 * 10) / 10} MB)`);
    return true;
  } catch {
    return false;
  }
}

outer:
for (const id of ids) {
  for (const v of variants) {
    if (await tryDownload(id, v)) break outer;
    console.log(`  miss: ${id}-${v}`);
  }
}
