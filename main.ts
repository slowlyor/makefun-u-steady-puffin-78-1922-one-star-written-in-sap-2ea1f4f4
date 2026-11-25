import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Written in Sap — a one-line 1-star review by a houseplant
// about its human owner. Written to /output/entry.txt for the judge.
const line =
  "One star. He waters me whenever his phone app buzzes, shoves me into frame for photos, then leaves me on the windowsill to fry — and still introduces me as 'low maintenance'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
