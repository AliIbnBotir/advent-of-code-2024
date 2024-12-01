import { NumberPair, readInput } from "./readInput";

function sortAndPair(): [number[], number[]] {
  const pairs: NumberPair[] = readInput("day1/input.txt");
  const leftList = pairs
    .map(([a]: NumberPair) => a)
    .sort((a: number, b: number) => a - b);
  const rightList = pairs
    .map(([_, b]: NumberPair) => b)
    .sort((a: number, b: number) => a - b);
  return [leftList, rightList];
}

function main(): void {
  const [leftList, rightList] = sortAndPair();

  // Pair the sorted lists and calculate differences
  let totalDiff = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDiff += Math.abs(leftList[i] - rightList[i]);
  }

  console.log("Total differences between sorted pairs:", totalDiff);
}

main();
