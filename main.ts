import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday morning: my alarm quit, my coffee filed for overtime, and my bed is holding me hostage for a ransom of five more snooze buttons.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
