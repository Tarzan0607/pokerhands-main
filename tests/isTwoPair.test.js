const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that TwoPair returns truthy if Two pairs match', () => {
  let hand = new Hand('♥3', '♦3', '♣7', '♠J', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Test that TwoPair returns falsy if not Two pairs match', () => {
  let hand = new Hand('♥A', '♦3', '♣9', '♠J', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns 0 if not two pair', () => {
  let hand = new Hand('♥A', '♦K', '♣Q', '♠J', '♠10');
  expect(CompareHands.isTwoPair(hand)).toBe(0);
});

test('Test that isTwoPair returns highest score for strongest hand', () => {
  let hand1 = new Hand('♥A', '♦A', '♣K', '♠K', '♠Q');
  let hand2 = new Hand('♥2', '♦2', '♣9', '♠3', '♠3');
  expect(CompareHands.isTwoPair(hand1)).toBeGreaterThan(CompareHands.isTwoPair(hand2));
});