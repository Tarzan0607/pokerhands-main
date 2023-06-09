const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FullHouse returns truthy if FullHouse, pair + three of a kind', () => {
  let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('Test that FullHouse returns falsy if FullHouse is incomplete', () => {
  let hand = new Hand('♥7', '♦3', '♣5', '♠2', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});
test('check that isFullHouse returns 0 if not full of house', () => {
  let hand = new Hand('♣6', '♣6', '♥6', '♣K', '♣Q');
  expect(CompareHands.isFullHouse(hand)).toBe(0);
});

test('check that isFullHouse returns the highest score for the strongest hand', () => {
  let hand1 = new Hand('♣2', '♣2', '♦2', '♣Q', '♦Q');
  let hand2 = new Hand('♥K', '♥K', '♥A', '♣A', '♦A');
  let score1 = CompareHands.isFullHouse(hand1);
  let score2 = CompareHands.isFullHouse(hand2);
  expect(score2).toBeGreaterThan(score1);
});