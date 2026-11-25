// Monday Morning Punchlines — entry writer.
//
// One joke about Monday mornings, at most 200 characters, written to
// /output/entry.txt for the gate scorer and the judge.
//
// The joke's trick: three ordinary morning objects stage a revolt.
// The alarm quits its job, the coffee demands overtime pay, and the
// bed takes its owner hostage — then names its price: five more
// snooze buttons. The punchline is a ransom negotiation, which is
// why it reads as a joke instead of a complaint about Mondays.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry. A single sentence, 135 characters, about Monday morning.
const ENTRY =
  "Monday morning: my alarm quit, my coffee filed for overtime, and my bed is holding me hostage for a ransom of five more snooze buttons.";

// Gate limits from the competition rules: the output file must hold
// UTF-8 text of 1 to 200 characters, and must not be blank.
const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

// Count characters as Unicode code points, not UTF-16 code units,
// so that any multi-byte character in a future edit is counted the
// way a reader counts it (one visible character = one character).
function countChars(text: string): number {
  return [...text].length;
}

// Refuse to write anything that would fail the gate, and say exactly
// which rule it breaks, so a bad entry is caught here and not in grading.
function checkEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("refusing to write a blank entry: only white space found");
  }
  const n = countChars(text);
  if (n < 1 || n > MAX_CHARS) {
    throw new Error(
      `refusing to write entry of ${n} characters: gate allows 1 to ${MAX_CHARS}`,
    );
  }
}

// Write the validated entry to the output file.
function writeEntry(text: string): void {
  checkEntry(text);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
}

writeEntry(ENTRY);
console.log(
  `entry written to ${OUTPUT_FILE} (${countChars(ENTRY)} characters)`,
);
