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

function isReportSafeWithDampener(levels: number[]): boolean {
  if (isReportSafe(levels)) return true;

  for (let i = 0; i < levels.length; i++) {
    const dampened = [...levels.slice(0, i), ...levels.slice(i + 1)];
    if (isReportSafe(dampened)) {
      return true;
    }
  }

  return false;
}

function countSafeReportsWithDampener(input: string): number {
  const reports = input.trim().split("\n");
  let safeCount = 0;

  for (const report of reports) {
    const levels = report.trim().split(/\s+/).map(Number);
    if (isReportSafeWithDampener(levels)) {
      safeCount++;
    }
  }

  return safeCount;
}

const input = fs.readFileSync("day2/input.txt", "utf8");
const result = countSafeReportsWithDampener(input);
console.log(`Number of safe reports with Problem Dampener: ${result}`);
