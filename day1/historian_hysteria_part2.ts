import { NumberPair, readInput } from "./readInput";

function calculateSimilarityScore(
  leftList: number[],
  rightList: number[]
): number {
  let totalScore = 0;

  for (const leftNum of leftList) {
    const appearances = rightList.filter((num) => num === leftNum).length;
    totalScore += leftNum * appearances;
  }

  return totalScore;
}

function main(): void {
const pairs: NumberPair[] = readInput("day1/input.txt");
  const leftList = pairs.map((pair) => pair[0]);
  const rightList = pairs.map((pair) => pair[1]);

  const similarityScore = calculateSimilarityScore(leftList, rightList);
  console.log(`The similarity score is: ${similarityScore}`);
}

main();
