import * as fs from "fs";

function isReportSafe(levels: number[]): boolean {
  if (levels.length < 2) return true;

  const isIncreasing = levels[1] > levels[0];

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    if (isIncreasing && diff < 0) return false;
    if (!isIncreasing && diff > 0) return false;
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;
  }
  return true;
}

function countSafeReports(input: string): number {
  const reports = input.trim().split("\n");
  let safeCount = 0;

  for (const report of reports) {
    const levels = report.trim().split(/\s+/).map(Number);
    if (isReportSafe(levels)) {
      safeCount++;
    }
  }

  return safeCount;
}

const input = fs.readFileSync("day2/input.txt", "utf8");
const result = countSafeReports(input);
console.log(`Number of safe reports: ${result}`);
