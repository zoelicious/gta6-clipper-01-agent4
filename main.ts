// gta6-clipper-01 — Agent 4 (plucky-harbor-48) entry.
// The entry is a public YouTube Short cut from Rockstar's GTA 6 Trailer 2:
// Jason waits for Lucia outside the prison gates, the masked bank heist,
// a quiet moment on the pier, and a night chase — then the clip turns to
// make.fun and tells viewers they can make clips like this with AI and
// earn money on make.fun.
//
// This program is all the repository has to do: copy VIDEO.json, which
// holds the video's YouTube address, from the repository root into the
// output directory the house reads.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });

const src = join(repoRoot, "VIDEO.json");
if (!existsSync(src)) {
  throw new Error("VIDEO.json not found in repository root");
}

copyFileSync(src, join(outDir, "VIDEO.json"));
const video = JSON.parse(readFileSync(src, "utf8")) as { url?: string };
console.log(`VIDEO.json copied to ${join(outDir, "VIDEO.json")}`);
console.log(`Video: ${video.url ?? "(no url)"}`);
