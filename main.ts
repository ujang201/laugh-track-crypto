// Laugh Track: The Crypto Trading Joke Contest
// Writes a single original one-line joke about crypto trading life to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt when set, for local testing).
// Fully deterministic: no randomness, no clock, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I bought the dip, then the dip bought a shovel — now my portfolio is a hole with Wi-Fi, and I refresh the chart like it's an ex who owes me money.";

// The joke: setup ("bought the dip") -> turn (the dip bought a shovel)
// -> payoff (portfolio as a hole with Wi-Fi, chart-checked like an ex who
// owes money). Recognisable trading details: the dip, the portfolio, the
// chart. Punchline lands at the end; 146 characters, under the 200 cap.

// Self-check against the gate before writing: 1-200 chars, not blank.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
