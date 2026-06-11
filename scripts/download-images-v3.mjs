import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "images");

// Real photography of actual support agents / offices (Unsplash license)
const images = [
  { name: "real-headset-woman-support.jpg", url: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&h=900&fit=crop&q=80" },
  { name: "real-headset-man-office.jpg", url: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=1200&h=900&fit=crop&q=80" },
  { name: "real-team-hands.jpg", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=900&fit=crop&q=80" },
  { name: "real-woman-desk-notes.jpg", url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=900&fit=crop&q=80" },
  { name: "real-man-laptop-call.jpg", url: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&h=900&fit=crop&q=80" },
  { name: "real-women-collab-laptop.jpg", url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=900&fit=crop&q=80" },
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
      console.log(`  FAIL too small: ${url}`);
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

for (const img of images) {
  await download(img.url, path.join(imagesDir, img.name));
}
