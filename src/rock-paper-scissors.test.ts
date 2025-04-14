import { play } from "./rock-paper-scissors";

describe("play", () => {
  test.each([
    ["rock", "scissors", 1],
    ["paper", "rock", 1],
    ["scissors", "paper", 1],
    ["scissors", "rock", 2],
    ["rock", "paper", 2],
    ["paper", "scissors", 2],
    ["rock", "rock", 0],
    ["paper", "paper", 0],
    ["scissors", "scissors", 0],
    [" Rock ", "SCISSORS", 1],
  ])('play("%s", "%s") should return %i', (p1, p2, expected) => { // https://jestjs.io/docs/api#testeachtablename-fn-timeout
    expect(play(p1, p2)).toBe(expected);
  });

  test.each([
    ["banana", "rock"],
    ["rock", "lizard"],
    ["", "paper"],
    ["rock", ""]
  ])('play("%s", "%s") throws error on invalid input', (p1, p2) => {
    expect(() => play(p1, p2)).toThrow("Invalid move");
  });
});