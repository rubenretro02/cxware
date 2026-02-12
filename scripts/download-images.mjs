import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "images");

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  {
    name: "call-center-agent-1.jpg",
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=800&fit=crop&crop=face&q=80",
  },
  {
    name: "call-center-agent-2.jpg",
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&crop=face&q=80",
  },
  {
    name: "woman-laptop.jpg",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "agent-headset-woman.jpg",
    url: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&h=800&fit=crop&crop=face&q=80",
  },
  {
    name: "agent-male-headset.jpg",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face&q=80",
  },
  {
    name: "globe-network.jpg",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "call-center-team.jpg",
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "business-meeting.jpg",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
  },
  // Agent page specific images
  {
    name: "agent-hero-headset.jpg",
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=700&fit=crop&q=80",
  },
  {
    name: "agent-laptop-home.jpg",
    url: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "agent-working-remote.jpg",
    url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "agent-happy-work.jpg",
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop&q=80",
  },
];

async function downloadImage(imageUrl, filePath) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.log(`Failed to download: ${imageUrl} - ${response.status}`);
      return false;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    console.log(`Downloaded: ${path.basename(filePath)}`);
    return true;
  } catch (error) {
    console.log(`Error downloading ${imageUrl}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log("Downloading stock images...");
  const promises = images.map((img) =>
    downloadImage(img.url, path.join(imagesDir, img.name))
  );
  const results = await Promise.all(promises);
  const success = results.filter(Boolean).length;
  console.log(`\nDone! Downloaded ${success}/${images.length} images.`);
}

main();
