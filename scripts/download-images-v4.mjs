import fs from "fs";
import path from "path";

const poolDir = path.join(process.cwd(), "public", "images", "_pool");
if (!fs.existsSync(poolDir)) fs.mkdirSync(poolDir, { recursive: true });

// Candidate pool — real photography series on Pexels (Yan Krukau call-center
// series, fauxels team series, Christina Morillo women-in-tech series).
const ids = [
  7709085, 7709212, 7710086, 7709087, 7710094, 8867482,
  1181605, 1181354, 1181263, 840996, 3184465, 3183150,
  3184292, 3184339, 7689877, 5453811,
];

async function download(id) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!response.ok) {
      console.log(`  FAIL ${response.status}: ${id}`);
      return;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 20000) {
      console.log(`  FAIL too small: ${id}`);
      return;
    }
    fs.writeFileSync(path.join(poolDir, `pool-${id}.jpg`), buffer);
    console.log(`  OK pool-${id}.jpg (${Math.round(buffer.length / 1024)} KB)`);
  } catch (err) {
    console.log(`  FAIL ${err.message}: ${id}`);
  }
}

for (const id of ids) {
  await download(id);
}
