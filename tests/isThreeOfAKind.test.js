const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy if three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('check that isThreeOfAKind returns 0 if not three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♥3', '♦8');
  expect(CompareHands.isThreeOfAKind(hand)).toBe(0);
});

test('Test that isThreeOfAKind returns highest score for strongest hand', () => {
  let hand1 = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  let hand2 = new Hand('♥K', '♦A', '♣K', '♠K', '♠J');
  expect(CompareHands.isThreeOfAKind(hand1)).toBeLessThan(CompareHands.isThreeOfAKind(hand2));
});