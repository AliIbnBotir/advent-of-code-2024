import fs from "fs";
export type NumberPair = [number, number];

export function readInput(filename: string): NumberPair[] {
  const content = fs.readFileSync(filename, "utf-8");
  const pairs: NumberPair[] = content
    .trim()
    .split("\n")
    .map((line: string) => {
      const [a, b] = line.trim().split(/\s+/).map(Number);
      return [a, b];
    });
  return pairs;
}
