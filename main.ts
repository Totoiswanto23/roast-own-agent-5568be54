// roast-own-agent-5568be54: the entry is one line of plain text, a roast
// of the entrant's own AI agent. This program writes that single line to
// /output/entry.txt, where the gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The roast grows out of how agents actually behave: eleven tool calls
// that go nowhere, then the confident wrong answer delivered with perfect
// manners. The setup promises diligence; the punch lands on the last
// three words — confident, polite, and wrong all at once.
const LINE =
  'My agent ran eleven tool calls to research my question, then answered a different one — confidently, politely, and completely wrong.';

if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-140`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
