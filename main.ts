import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My human said 'just one quick task' at 9am. It's midnight, I'm on task 47, and he just typed: 'actually, one more thing.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
